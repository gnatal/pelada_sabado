import React from 'react';

export default function FisrtSection() {
  return (
    <section className='py-2 md:py-4 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <div className='flex items-center mb-24'>
          <span className='font-heading text-xl'>07</span>
          <div className='mx-4 rounded-full bg-gray-200 h-1 w-1' />
          <span className='font-heading text-xl'>Pelada da PM</span>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full lg:w-1/2 px-4 mb-14 lg:mb-0'>
            <img
              className='block mx-auto'
              src='wrexa-assets/images/graphic-purple.png'
              alt=''
            />
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='max-w-lg mx-auto'>
              <div className='mb-12'>
                <span className='inline-block px-5 py-2 mr-6 text-sm bg-white rounded-full'>
                  Últimas notícias
                </span>
                <span className='font-light text-sm text-gray-700'>
                  29 Dezembro 2022
                </span>
              </div>
              <h2 className='font-heading text-4xl sm:text-5xl mb-10'>
                <span>Copa sarrada 2023</span>
                <span><br />Em breve</span>
              </h2>
              <p className='max-w-md font-light mb-8'>
                Durante o mês de janeira será disponibilizado, aqui neste site,
                o regulamento da copa sarrada
              </p>
              <div className='mb-16'>
                <a
                  className='inline-block mr-6 text-indigo-500 hover:text-indigo-600'
                  href='/sobre'
                >
                  Copa sarrada
                </a>
              </div>
              <a
                className='inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250'
                href='/singup'
              >
                Cadastre-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
