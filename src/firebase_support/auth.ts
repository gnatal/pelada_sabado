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

export const getUserByUUID = async (uuid: string) => {
  // const users = collection(database, "users");
  // const q = query(users, where('uuid', '==', uuid))
  // const user = await getDocs(q)
  // console.log('user', user)
  // user.forEach((doc) => {
  //   console.log('user', doc)
  // })
  const q = query(collection(database, "users"), where("uid", "==", uuid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  return true
}

export const logout = async () => {
  try {
    signOut(auth)
  } catch (e) {
    console.log(e)
  }
}