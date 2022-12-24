import { auth, database } from 'utils/firebaseConfig'
import { setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createUserWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { IPelada } from 'firebase_support/models/Pelada'

const table = 'pelada';

export const createPelada = async (pelada: IPelada) => {
  try {
    return await addDoc(collection(database, table), pelada)
  } catch (e) {
    return false;
  }
}
