import { auth, database } from 'utils/firebaseConfig'
import { setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createUserWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth'
import { addDoc, collection, query, where, getDocs, setDoc, doc, getDoc } from 'firebase/firestore'
import { IPelada } from 'firebase_support/models/Pelada'

const table = 'pelada';

export const createPelada = async (pelada: IPelada) => {
  try {
    const newPelada = await addDoc(collection(database, table), {
      ...pelada
    })
    return newPelada.id
  } catch (e) {
    console.log('error creating pelada', e)
    return false;
  }
}

export const getAllPelada = async () => {
  try {
    const snapshot = await getDocs(collection(database, table))
    let peladas: IPelada[] = [];
    snapshot.forEach((doc) => {
      peladas.push(({ uid: doc.id, ...doc.data() } as IPelada))
    })
    return peladas;
  } catch (e) {
    console.log('error creating pelada', e)
    return false;
  }
}

export const getPeladaById = async (uuid: string) => {
  try {
    const docRef = doc(database, table, uuid)
    const docSnap = await getDoc(docRef)
    return ({ ...docSnap.data(), uid: uuid } as IPelada)
  } catch (e) {
    console.log('error creating pelada', e)
    return false;
  }
}