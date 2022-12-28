import Card from 'components/Card';
import { addUserToListaPelada, createListaPelada, getListaPeladaByPeladaId } from 'firebase_support/controller/ListaPeladaController';
import { getPeladaById } from 'firebase_support/controller/PeladaController';
import { getUserBalance, removeCreditFromUser } from 'firebase_support/controller/UserBalanceController';
import { IPelada } from 'firebase_support/models/Pelada';
import { IUser } from 'firebase_support/models/User';
import { IUserBalance } from 'firebase_support/models/UserBalance';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function PeladaInscricao() {
  const router = useRouter();
  const [currentPelada, setCurrentPelada] = useState<IPelada>();
  const [isLoading, setIsLoading] = useState(true);
  const [userBalance, setUserBalance] = useState<IUserBalance>();

  useEffect(() => {
    const { pelada } = router.query;
    if (pelada)
      getPeladaById(pelada.toString()).then((peladaResult) => {
        if (peladaResult)
          setCurrentPelada(peladaResult)
      }).catch(e => console.log('error', e)).finally(() => {
        setIsLoading(false)
      })
    const jsonUser = sessionStorage.getItem('currentUser')
    const user = (JSON.parse(jsonUser) as IUser);
    getUserBalance(user.uuid).then((result) => {
      setUserBalance(result)
    })

  }, [])

  async function inscreverNaPelada(pelada: IPelada) {
    try {
      const jsonUser = sessionStorage.getItem('currentUser')
      if (jsonUser) {
        const user = (JSON.parse(jsonUser) as IUser);
        let listaPelada = await getListaPeladaByPeladaId(pelada.uid);
        console.log('LISTA PELADA', listaPelada)
        if (!listaPelada) {
          const peladaUid = await createListaPelada(pelada)
          listaPelada = await getListaPeladaByPeladaId(pelada.uid);
          console.log('LISTA PELADA', listaPelada)
        }
        if (listaPelada) {
          console.log('LISTA PELADA', listaPelada)
          await addUserToListaPelada(user, listaPelada?.uid)
          await removeCreditFromUser(user.uuid)
        }
      }

    } catch (e) {
      console.log('error', e)
    }
  }

  if (isLoading) {
    return <p>loading</p>
  }

  return (
    <div>
      <div className='flex w-4/5 m-auto py-5'>
        <p>saldo: {`${userBalance?.credits} créditos`}</p>
      </div>
      <Card
        imageAlt='peladaPm'
        imageSrc='images/semanal.jpg'
        text={`Pelada da PM de sábado dia ${currentPelada?.dia} as ${currentPelada?.hora}`}
        title={`Pelada COPM - custo 1 crédito`}
        tags={['pelada', 'copm', 'sábado']}
      >
        <button
          onClick={() => inscreverNaPelada(currentPelada)}
          className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          Comprar
        </button>
      </Card>
    </div>
  )
}