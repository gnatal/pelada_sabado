import React from 'react';

export default function ForgotPasswordHeader() {
  return (
    <div>
      <img
        className='mx-auto h-12 w-auto'
        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
        alt='Workflow'
      />
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        Provide your e-mail
      </h2>
      <h6 className='mt-2 text-center font-extrabold text-gray-900'>
        We are gonna an e-mail to change your password
      </h6>
    </div>
  );
}
