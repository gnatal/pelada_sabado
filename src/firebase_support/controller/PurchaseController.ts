import { database } from 'utils/firebaseConfig'
import { addDoc, collection, getDocs, doc, getDoc, updateDoc, where, query } from 'firebase/firestore'
import { IUser } from 'firebase_support/models/User';
import { IProduct } from 'firebase_support/models/Products';

const table = 'purchases';

export const createPurchase = async (user: IUser, product: IProduct) => {
  try {
    const newPurchase = await addDoc(collection(database, table), {
      ...product,
      ...user,
      date: new Date()
    })
    return newPurchase
  } catch (e) {
    console.log('error creating pelada', e)
    return false;
  }
}

export const getUserPurchases = async (user_uuid: string) => {
  try {
    const q = query(collection(database, table), where('user_uuid', '==', user_uuid));
    const docSnap = await getDocs(q)
    docSnap.forEach((doc) => {
      console.log(`id ${doc.id}: data`, doc.data())
    })
  } catch (e) {
    console.log('error', e)
  }

}