import Card from 'components/Card';
import { getProductByUUID } from 'firebase_support/controller/ProductsController';
import { createPurchase } from 'firebase_support/controller/PurchaseController';
import { addCreditToUser } from 'firebase_support/controller/UserBalanceController';
import { createEmptyProduct, IProduct } from 'firebase_support/models/Products';
import { IUser } from 'firebase_support/models/User';
import { uploadFile } from 'firebase_support/storage';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { centsToDollar } from 'utils/centsConverter';

export default function Checkout() {
  const router = useRouter();
  const [product, setProduct] = useState<IProduct>(createEmptyProduct())
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const { product } = router?.query;
    if (product) {
      getProductByUUID(product?.toString()).then((data) => {
        setProduct(data);
      }).catch((error) => console.log(error))
      setIsLoading(false)
    }
  }, [])

  async function uploadFileFromUser(e: any) {
    const files = e.target.files
    setFile(files[0])
  }

  async function finishBuy(product: IProduct) {
    try {
      const jsonUser = sessionStorage.getItem('currentUser')
      if (jsonUser) {
        const user = (JSON.parse(jsonUser) as IUser);
        await createPurchase(user, product)
        await uploadFile((file as File), `images/${user.uuid}.${file?.type.replace('image/', '')}`)
        const credits = product.valor_centavos === 3500 ? 4 : 1;
        await addCreditToUser(user.uuid, credits);
      }
    } catch (e) {
      console.log('error', e)
    }
  }

  if (isLoading) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  }

  return (
    <div className='md:grid md:grid-cols-2'>
      <Card
        title={product.title}
        text={product.description}
        imageSrc={product.image}
        imageAlt={'Copm'}
        tags={['copm']}
      />
      <div className='p-10 text-center sm:text-left'>
        Valor: {`${centsToDollar(product.valor_centavos).toFixed(2)} R$`}
        <p>Pix para pagamento</p>
        <br />
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='mt-5 flex flex-col justify-center content-center text-center'>
            <h6>QrCode email:<br /> {'THIAGOHC84@GMAIL.COM'.toLowerCase()}</h6>
            <div className='w-full flex justify-center content-center'>
              <img className='w-40' src="/images/QrCodeEmail.png" alt="QrCode email" />
            </div>

          </div>
          <div className='mt-5 flex flex-col justify-center content-center text-center'>
            <h6>QrCode Celular: :<br />(61)98205-7972</h6>
            <div className='w-full flex justify-center content-center'>
              <img className='w-40' src="/images/QrCodeCelular.png" alt="QrCode celular" />
            </div>

          </div>
        </div>

        <div className='py-10'>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            onChange={uploadFileFromUser}
          />
        </div>
        <button
          onClick={() => finishBuy(product)}
          className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          Comprar
        </button>
      </div>
    </div >
  )
}