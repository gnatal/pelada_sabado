import { database } from 'utils/firebaseConfig'
import { getDoc, doc, updateDoc, setDoc, DocumentSnapshot, DocumentData } from 'firebase/firestore'
import { IUserBalance } from 'firebase_support/models/UserBalance'

const table = 'user_balance';

export const createUserBalance = async (uuid: string): Promise<void> => {
  try {
    const userBalanceRef = doc(database, table, uuid);
    await setDoc(userBalanceRef, {}, { merge: true })

  } catch (e) {
    console.log('ERROR CREATING USER BALANCE', e)
  }
}

export const getUserBalanceRef = async (uuid: string): Promise<DocumentSnapshot<DocumentData> | false> => {
  try {
    const docRef = doc(database, table, uuid)
    const docSnap = await getDoc(docRef)
    return docSnap
  } catch (e) {
    console.log('ERROR GETTING THE USER', e);
    return false;
  }
}