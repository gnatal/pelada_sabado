import { auth, database } from 'utils/firebaseConfig'
import { setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createUserWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth'
import { addDoc, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { createEmptyUser, IUser } from 'firebase_support/models/User'

const table = 'users'

export const getUserByUUID = async (uuid: string) => {
  const docRef = doc(database, table, uuid)
  const docSnap = await getDoc(docRef)
  return ({ ...docSnap.data(), uuid } as IUser)
}
