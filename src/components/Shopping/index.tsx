import Card from '../Card'

export default function Shopping() {
  return (
    <div className='grid grid-cols-3'>
      <Card
        title='Pelada da semana'
        text='A compra desse ticket lhe da direito a jogar a pelada por 1 semana'
        tags={['pelada', 'copm']}
        imageSrc='/images/semanal.jpg'
        imageAlt='Copm semanal'
      />
      <Card
        title='Pelada do mês'
        text='A compra desse ticket lhe da direito a jogar a pelada 4 peladas quando quiser'
        tags={['pelada', 'copm']}
        imageSrc='/images/mensalista.jpg'
        imageAlt='Copm semanal'
      />
    </div>
  )
}