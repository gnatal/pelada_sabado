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
    console.log('LISTA', user)
    await updateDoc(docRef, {
      users: [...lista?.users, {
        name: user.name || user.email,
        uid: user.uuid
      }]
    })
  } catch (e) {
    console.log('error', e)
  }
}


export const getListaPeladaByPeladaId = async (pelada_uuid: string): Promise<IListaPelada | boolean> => {
  try {
    const q = query(collection(database, table), where('pelada_uuid', '==', pelada_uuid));
    const docSnap = await getDocs(q)
    if (docSnap.empty)
      return false;
    let lista: IListaPelada = createEmptyListaPelada()
    docSnap.forEach((doc) => {
      lista = { ...doc.data(), uid: doc.id }
    })
    return lista
  } catch (e) {
    console.log('error', e)
    return false;
  }
}