import { database } from 'utils/firebaseConfig'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { IUserBalance } from 'firebase_support/models/UserBalance'

const table = 'user_balance'

export const addCreditToUser = async (uid: string, credits: number) => {
  try {
    const docRef = doc(database, table, uid)
    const docSnap = await getDoc(docRef)
    const user = { uuid: docSnap.id, ...docSnap.data() } as IUserBalance;
    user.credits += credits;
    await updateDoc(docRef, {
      credits: user.credits
    })
  } catch (e) {
    console.log('error', e)
  }
}

export const removeCreditFromUser = async (uid: string) => {
  try {
    const docRef = doc(database, table, uid)
    const docSnap = await getDoc(docRef)
    const user = { uuid: docSnap.id, ...docSnap.data() } as IUserBalance;
    user.credits -= 1;
    await updateDoc(docRef, {
      credits: user.credits
    })
  } catch (e) {
    console.log('error', e)
  }
}

export const getUserBalance = async (uid: string) => {
  try {
    const docRef = doc(database, table, uid)
    const docSnap = await getDoc(docRef)
    const user = { uuid: docSnap.id, ...docSnap.data() } as IUserBalance;
    return user;
  } catch (e) {
    console.log('error', e)
  }
}