
import React from 'react';

export default function LoginHeader() {
  return (
    <div>
      <img
        className='mx-auto h-12 w-auto'
        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
        alt='Workflow'
      />
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        Entrar:
      </h2>
      <p className='mt-2 text-center text-sm text-gray-600'>
        ou
        <a
          href='/signup'
          className='font-medium text-indigo-600 hover:text-indigo-500'
        >
          {'\t Não tem uma conta clique aqui'}
        </a>
      </p>
    </div>
  );
}
