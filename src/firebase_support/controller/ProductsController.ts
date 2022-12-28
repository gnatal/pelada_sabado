import { auth, database } from 'utils/firebaseConfig'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { IProduct } from 'firebase_support/models/Products'

const table = 'Products';

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const snapshot = await getDocs(collection(database, table))
    let products: IProduct[] = [];
    snapshot.forEach((doc) => {
      products.push(({ product_uuid: doc.id, ...doc.data() } as IProduct))
    })
    return products;
  } catch (e) {
    console.log('error getting products', e)
    return ([] as IProduct[]);
  }
}

export const getProductByUUID = async (uuid: string): Promise<IProduct> => {
  const docRef = doc(database, table, uuid)
  const docSnap = await getDoc(docRef)
  return ({ ...docSnap.data(), product_uuid: uuid } as IProduct)
}
