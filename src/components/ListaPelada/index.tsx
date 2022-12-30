import { getListaPeladaById } from 'firebase_support/controller/ListaPeladaController';
import { IListaPelada } from 'firebase_support/models/ListaPelada';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function ListaPelada() {

  const router = useRouter();
  const [currentList, setCurrentList] = useState<IListaPelada>()
  const [isLoading, setIsLoading] = useState(true)

  async function getListaPeladaByLista(lista: string) {
    try {
      const listaPelada = await getListaPeladaById(lista);
      setCurrentList(listaPelada)
      setIsLoading(false)
      console.log(listaPelada)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const { lista } = router.query;
    if (typeof lista === 'string')
      getListaPeladaByLista(lista)
  }, [])

  if (isLoading)
    return <p>Loading</p>

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Nome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentList?.users?.map((user, index) => {
                    return (
                      <tr className="border-b" key={user.uuid}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user?.name || 'Jogador sem nome'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}