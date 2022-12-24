import { auth, database } from 'utils/firebaseConfig'
import { setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createUserWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    await setPersistence(auth, browserLocalPersistence)
    return user;
  } catch (e) {
    console.log(e)
  }
}

export const registerWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(database, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
      role: "user",
      mensalista: false
    });
  } catch (err) {
    console.error(err);
  }
};


export const logout = async () => {
  try {
    signOut(auth)
  } catch (e) {
    console.log(e)
  }
}