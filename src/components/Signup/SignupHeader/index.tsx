import React from 'react';

export default function SignupHeader() {
  return (
    <div>
      <img
        className='mx-auto h-12 w-auto'
        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
        alt='Workflow'
      />
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        Create your account
      </h2>
    </div>
  );
}
