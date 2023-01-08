import { getAllPelada } from 'firebase_support/controller/PeladaController'
import { IPelada } from 'firebase_support/models/Pelada';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import PeladaSelector from './PeladaSelector';

export default function Peladas() {

  const router = useRouter();
  const [peladas, setPeladas] = useState<IPelada[]>([])

  async function getPeladas() {
    try {
      return await getAllPelada();
    } catch (e) {
      return false
    }
  }

  // dates are in the following format -> YYYY-mm-dd
  function compareStringDates(date1: string, date2: string) {
    const [year1, month1, day1] = date1.split('-');
    const [year2, month2, day2] = date2.split('-');
    if (Number(year1) > Number(year2)) {
      return true;
    } else if (year1 === year2) {
      if (Number(month1) > Number(month2)) {
        return true
      }
      else if (Number(month1) === Number(month2)) {
        if (Number(day1) > Number(day2)) return true
        return false;
      }
      else {
        return false
      }
    } else {
      return false;
    }
  }

  function filterPeladasPast(peladas: IPelada[]) {
    const today = new Date();
    const formattedToday = `${today.getUTCFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    return peladas.filter((pelada) => compareStringDates(pelada.dia, formattedToday))
  }

  function goToSubscribe(pelada: IPelada) {
    router.push(`/peladaInscricao?pelada=${pelada.uid}`)
  }

  useEffect(() => {
    getPeladas().then((data) => {
      if (data) {
        const allPeladas = data.filter((pelada) => pelada.dia)
        setPeladas(filterPeladasPast(allPeladas))
      }
    })
  }, [])

  return (
    <div>
      {peladas.map((pelada) => (<PeladaSelector key={pelada.uid} pelada={pelada} onClick={goToSubscribe} />))}
    </div>

  )
}