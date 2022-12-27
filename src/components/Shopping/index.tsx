import { getAllProducts } from 'firebase_support/controller/ProductsController';
import { IProduct } from 'firebase_support/models/Products';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { centsToDollar } from 'utils/centsConverter';
import Card from '../Card'

export default function Shopping() {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getAllProducts().then((products: IProduct[]) => {
      setProducts(products)
    }).catch((error) => console.log(error))
  }, [])

  function goToCheckout(product: IProduct) {
    router.push(`/checkout?product=${product.uuid}`)

  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3'>
      {products.map((product) => {
        return (
          <div key={product.uuid}>
            <Card
              title={`${product.title} - ${centsToDollar(product.valor_centavos).toFixed(2)} R$`}
              text={product.description}
              tags={['pelada', 'copm']}
              imageSrc={product.image}
              imageAlt='Copm semanal'
            >
              <button
                onClick={() => goToCheckout(product)}
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Comprar
              </button>
            </Card>

          </div>
        )
      })}
    </div>
  )
}