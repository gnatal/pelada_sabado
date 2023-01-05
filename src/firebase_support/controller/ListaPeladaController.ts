import { database } from 'utils/firebaseConfig'
import { addDoc, collection, getDocs, doc, getDoc, updateDoc, query, where } from 'firebase/firestore'
import { IPelada } from 'firebase_support/models/Pelada'
import { createEmptyListaPelada, IListaPelada } from 'firebase_support/models/ListaPelada';
import { IUser } from 'firebase_support/models/User';

const table = 'lista_pelada';

export const createListaPelada = async (pelada: IPelada): Promise<string | boolean> => {
  try {
    const newPelada = await addDoc(collection(database, table), {
      pelada_uuid: pelada.uid,
      dia: pelada.dia,
      createdAt: new Date(),
      users: []
    })
    return newPelada.id
  } catch (e) {
    console.log('error creating pelada', e)
    return false;
  }
}

export const getAllListaPelada = async () => {
  try {
    const snapshot = await getDocs(collection(database, table))
    let peladas: IListaPelada[] = [];
    snapshot.forEach((doc) => {
      peladas.push(({ uid: doc.id, ...doc.data() } as IListaPelada))
    })
    return peladas;
  } catch (e) {
    console.log('error creating pelada', e)
    return false;
  }
}

export const addUserToListaPelada = async (user: IUser, lista_uuid: string) => {
  try {
    const docRef = doc(database, table, lista_uuid)
    const docSnap = await getDoc(docRef)
    const lista = docSnap.data();
    await updateDoc(docRef, {
      users: [...lista?.users, {
        name: user.name || user.email,
        uuid: user.uuid
      }]
    })
  } catch (e) {
    console.log('error', e)
  }
}

export const getListaPeladaById = async (uuid: string): Promise<IListaPelada> => {
  try {
    const docRef = doc(database, table, uuid)
    const docSnap = await getDoc(docRef)
    const lista = docSnap.data();
    return { uid: docSnap.id, ...docSnap.data() } as IListaPelada
  } catch (e) {
    console.log('error', e)
    return createEmptyListaPelada();
  }
}

export const getListaPeladaByPeladaId = async (pelada_uuid: string): Promise<IListaPelada> => {
  try {
    const q = query(collection(database, table), where('pelada_uuid', '==', pelada_uuid));
    const docSnap = await getDocs(q)
    let lista: IListaPelada = createEmptyListaPelada()
    if (docSnap.empty)
      return lista;
    docSnap.forEach((doc) => {
      lista = { ...doc.data(), uid: doc.id }
    })
    return lista
  } catch (e) {
    console.log('error', e)
    return createEmptyListaPelada();
  }
}

export const isUserSubscribedToPelada = async (user_uuid: string, pelada_uuid: string): Promise<boolean> => {
  try {
    const q = query(collection(database, table), where('pelada_uuid', '==', pelada_uuid));
    const docSnap = await getDocs(q)
    let isSubscribed = false;
    docSnap.forEach((doc) => {
      console.log(doc.data())
      doc.data().users.forEach((user: any) => {
        if (user.uuid === user_uuid) isSubscribed = true;
      })
    })
    return isSubscribed;
  } catch (e) {
    return false;
  }
}