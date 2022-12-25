
import React from 'react';
import Link from 'next/link';

export default function LoginHeader() {
  return (
    <div>
      <img
        className='mx-auto h-12 w-auto'
        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
        alt='Workflow'
      />
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        Criar pelada
      </h2>
    </div>
  );
}
