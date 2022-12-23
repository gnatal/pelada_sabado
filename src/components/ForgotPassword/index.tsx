import React from 'react';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '../Form/Input';
import validation from '../../utils/validation';
import ForgotPasswordHeader from './ForgotPasswordHeader';

interface EmailInputs {
  email: string;
}

const emailInputs = {
  name: 'email',
  type: 'email',
  placeholder: 'email',
};

export default function ForgotPassword() {
  const formOptions = { resolver: yupResolver(validation.forgotPasswordSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInputs>(formOptions);

  const onSubmit: SubmitHandler<EmailInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <ForgotPasswordHeader />
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <TextInput
              label='Email address'
              elementId='email'
              register={register}
              {...emailInputs}
              errors={errors}
              roundBottom={false}
              roundTop
            />
          </div>
          <div>
            <button
              type='submit'
              data-testid='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}
