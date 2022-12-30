import Card from 'components/Card';
import { addUserToListaPelada, createListaPelada, getListaPeladaByPeladaId, isUserSubscribedToPelada } from 'firebase_support/controller/ListaPeladaController';
import { getPeladaById } from 'firebase_support/controller/PeladaController';
import { getUserBalance, removeCreditFromUser } from 'firebase_support/controller/UserBalanceController';
import { IListaPelada } from 'firebase_support/models/ListaPelada';
import { createEmptyPelada, IPelada } from 'firebase_support/models/Pelada';
import { IUser } from 'firebase_support/models/User';
import { IUserBalance } from 'firebase_support/models/UserBalance';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { getUser } from 'utils/userSessionManager';

export default function PeladaInscricao() {
  const router = useRouter();
  const [currentPelada, setCurrentPelada] = useState<IPelada>(createEmptyPelada());
  const [isLoading, setIsLoading] = useState(true);
  const [userBalance, setUserBalance] = useState<IUserBalance>();


  async function fetchPelada(): Promise<IPelada> {
    const { pelada } = router.query;
    try {
      const resultPelada = await getPeladaById((pelada as string).toString())
      if (resultPelada) {
        setCurrentPelada(resultPelada);
        return resultPelada
      }
      return createEmptyPelada();
    } catch (e) {
      console.log('ERROR GETTING PELADA', e)
      return createEmptyPelada();
    }
  }

  async function initListaPeladaPage() {
    const user = getUser();
    if (!user) return;
    try {
      const pelada = await fetchPelada();
      if (pelada.uid) {
        let listaPelada = await getListaPeladaByPeladaId(pelada.uid);
        const isUserSubscribed = await isUserSubscribedToPelada(user.uuid, (listaPelada as IListaPelada).uid)
        if (isUserSubscribed) {
          router.push(`/listaPelada?lista=${listaPelada.uid}`)
        }
      }
      if (user) {
        const balance = await getUserBalance(user.uuid)
        setUserBalance(balance)
      }
      setIsLoading(false)
    } catch (e) {
      console.log('error initings', e)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    initListaPeladaPage();
  }, [])

  async function inscreverNaPelada(pelada: IPelada) {
    try {
      const user = getUser();
      if (pelada.uid) {
        let listaPelada = await getListaPeladaByPeladaId(pelada.uid);
        if (!listaPelada) {
          const peladaUid = await createListaPelada(pelada)
          listaPelada = await getListaPeladaByPeladaId(pelada.uid);
        }
        if (listaPelada) {
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
        imageSrc='/images/semanal.jpg'
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