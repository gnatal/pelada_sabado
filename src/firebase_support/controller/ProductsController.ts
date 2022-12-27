import { auth, database } from 'utils/firebaseConfig'
import { collection, getDocs, doc } from 'firebase/firestore'
import { IProduct } from 'firebase_support/models/Products'

const table = 'Products';

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(collection(database, table))
    let products: IProduct[] = [];
    snapshot.forEach((doc) => {
      products.push(({ uuid: doc.id, ...doc.data() } as IProduct))
    })
    return products;
  } catch (e) {
    console.log('error getting products', e)
    return false;
  }
}