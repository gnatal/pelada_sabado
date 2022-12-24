import { auth, database } from 'utils/firebaseConfig'
import { setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createUserWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { createEmptyUser, IUser } from 'firebase_support/models/User'

const table = 'users'

export const getUserByUUID = async (uuid: string) => {
  const q = query(collection(database, table), where("uid", "==", uuid));
  const querySnapshot = await getDocs(q);
  let user: IUser = createEmptyUser();
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    user = (doc.data() as IUser);
  });
  return user
}
