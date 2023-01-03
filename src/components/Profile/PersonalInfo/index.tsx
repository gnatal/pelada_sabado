import { useFirebaseAuth } from 'hooks/authHook';
import React from 'react';

export default function PersonalInfo() {

  const { user } = useFirebaseAuth();


  return (
    <div className='w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md'>
      <div className='rounded  shadow p-6'>
        <div className='pb-6'>
          <label htmlFor='name' className='font-semibold text-gray-700 block pb-1'>Nome</label>
          <div className='flex'>
            <input disabled id='username' className='border-1  rounded-r px-4 py-2 w-full' type='text' value={user?.name} />
          </div>
        </div>
        <div className='pb-4'>
          <label htmlFor='about' className='font-semibold text-gray-700 block pb-1'>E-mail</label>
          <input disabled id='email' className='border-1  rounded-r px-4 py-2 w-full' type='email' value={user?.email} />
          <span className='text-gray-600 pt-4 block opacity-70'>Dados pessoas da sua conta</span>
        </div>
      </div>
    </div>
  );
}
