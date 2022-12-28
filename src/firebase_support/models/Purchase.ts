import { createEmptyProduct, IProduct } from './Products';
import { createEmptyUser, IUser } from './User';

export interface IPurchase {
  user: IUser;
  product: IProduct
  date: string;
}

export const createEmptyPurchase = () => {
  return {
    user: createEmptyUser(),
    product: createEmptyProduct(),
    date: ''
  }
}