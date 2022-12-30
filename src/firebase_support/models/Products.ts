export interface IProduct {
  product_uuid?: string;
  valor_centavos: number;
  name: string;
  image: string;
  title: string;
  description: string;
  active: boolean;
}

export const createEmptyProduct = (): IProduct => {
  return {
    product_uuid: '',
    valor_centavos: 0,
    name: '',
    title: '',
    image: '',
    description: '',
    active: false
  }
}

