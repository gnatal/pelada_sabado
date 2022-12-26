import { database } from 'utils/firebaseConfig'
import { addDoc, collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore'
import { IPelada } from 'firebase_support/models/Pelada'
import { IListaPelada } from 'firebase_support/models/ListaPelada';
import { IUser } from 'firebase_support/models/User';

const table = 'lista_pelada';

export const createListaPelada = async (pelada: IPelada) => {
  try {
    const newPelada = await addDoc(collection(database, table), {
      ...pelada,
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
      pelada_uuid: lista?.pelada_uuid,
      users: [...lista?.users, user]
    })
  } catch (e) {
    console.log('error', e)
  }

}