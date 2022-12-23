import React, { type FormEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import validation from '../../utils/validation';
import LockIcon from '../Icons/LockIcons';
import Checkbox from '../Form/Checkbox';
import TextInput from '../Form/Input';
import LoginHeader from './LoginHeader';
import { loginWithEmailAndPassword } from 'firebase_support/auth';
import { useRouter } from 'next/router';
import Link from 'next/link'

interface LoginInputs {
  email: string;
  password: string;
}

const emailInputs = {
  name: 'email',
  type: 'email',
  placeholder: 'email',
};

const passwordInputs = {
  name: 'password',
  type: 'password',
  placeholder: 'password',
};

export default function Login() {
  const router = useRouter()
  const formOptions = { resolver: yupResolver(validation.loginSchema) };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>(formOptions);

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      console.log(data);
      const response = await loginWithEmailAndPassword(data.email, data.password)
      router.push('/profile')
      console.log('response', response)
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <LoginHeader />
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
            <TextInput
              label='Password'
              elementId='password'
              register={register}
              {...passwordInputs}
              errors={errors}
              roundBottom
              roundTop={false}
            />
          </div>

          <div className='flex items-center justify-between'>
            <Checkbox label='Remember-me' elementId='remember' />

            <div className='text-sm'>
              <Link
                href='/forgot-password'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type='submit'
              data-testid='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <LockIcon />
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
