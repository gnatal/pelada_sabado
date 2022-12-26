import { getAllPelada } from 'firebase_support/controller/PeladaController'
import { IPelada } from 'firebase_support/models/Pelada';
import { useEffect, useState } from 'react'
import PeladaSelector from './PeladaSelector';

export default function Peladas() {

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
    if (year1 > year2) {
      return true;
    } else if (year1 === year2) {
      if (month1 > month2) return true
      else if (month1 === month2) {
        if (day1 > day2) return true
        return false;
      }
      else return false
    } else {
      return false;
    }
  }

  function filterPeladasPast(peladas: IPelada[]) {
    const today = new Date();
    const formattedToday = `${today.getUTCFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    return peladas.filter((pelada) => compareStringDates(pelada.dia, formattedToday))
  }

  useEffect(() => {
    getPeladas().then((data) => {
      if (data) {
        setPeladas(filterPeladasPast(data))
      }
    })
  }, [])

  return (
    <div>
      {peladas.map((pelada) => (<PeladaSelector key={pelada.uid} pelada={pelada} />))}
    </div>

  )
}