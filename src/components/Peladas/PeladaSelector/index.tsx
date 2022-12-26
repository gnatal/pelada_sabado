import { IPelada } from 'firebase_support/models/Pelada';

export default function PeladaSelector({ pelada }: { pelada: IPelada }) {
  return (
    <div className='grid grid-cols-2 my-10'>
      <span className='px-5 md:px-10 py-4 mr-10 shadow-2xl rounded'>{`pelada dia: ${pelada.dia} `}</span>
      <button
        className='w-200 px-10 py-5 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >Entrar na pelada</button>
    </div>
  )
}