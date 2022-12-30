import { auth, database } from 'utils/firebaseConfig'
import { setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createUserWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth'
import { setDoc, collection, query, where, doc } from 'firebase/firestore'

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    await setPersistence(auth, browserLocalPersistence)
    return user;
  } catch (e) {
    console.log(e)
  }
}

export const registerWithEmailAndPassword = async ({
  email,
  password,
  name
}: {
  email: string,
  password: string,
  name: string
}) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(database, "users", user.uid), {
      authProvider: "local",
      name,
      email,
      role: "public",
      mensalista: false
    });
    await setDoc(doc(database, 'user_balance', user.uid), {
      credits: 0
    })
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