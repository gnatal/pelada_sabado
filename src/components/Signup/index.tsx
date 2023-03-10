import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validation from '../../utils/validation';
import SignupHeader from './SignupHeader';
import LockIcon from '../Icons/LockIcons';
import TextInput from '../Form/Input';
import PrivacyPolicy from './PrivacyPolicy';
import { registerWithEmailAndPassword } from 'firebase_support/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { FirebaseError } from 'firebase/app';

interface SignupInputs {
  email: string;
  password: string;
  confirmPassword: string;
  name: string
}

const nameInputs = {
  name: 'name',
  type: 'text',
  placeholder: 'Name',
};


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

const passwordConfirmInputs = {
  name: 'confirmPassword',
  type: 'password',
  placeholder: 'confirm password',
};

export default function Signup() {
  const router = useRouter();
  const formOptions = { resolver: yupResolver(validation.singupSchema) };

  function generateErrorMessage(firebaseError: FirebaseError) {
    if (firebaseError.code === 'auth/email-already-in-use')
      return 'Este usuário já existe por favor utilize outro e-mail'
    return 'Erro desconhecido tente novamente mais tarde'
  }

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    const result = await registerWithEmailAndPassword({ ...data })
    console.log(result)
    if (!result) {
      toast('Usuário criado com sucesso', { autoClose: 2000 });
      setTimeout(() => {
        router.replace('/profile')
      }, 2000)
    } else {
      toast.error(generateErrorMessage(result), { autoClose: 2000 })
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupInputs>(formOptions);

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <SignupHeader />
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <TextInput
              label='Email address'
              elementId='email'
              {...emailInputs}
              roundBottom={false}
              roundTop
              register={register}
              name='email'
              errors={errors}
            />
            <TextInput
              label='Name'
              elementId='name'
              {...nameInputs}
              roundBottom={false}
              roundTop
              register={register}
              name='name'
              errors={errors}
            />
            <TextInput
              label='Password'
              elementId='password'
              {...passwordInputs}
              register={register}
              name='password'
              roundBottom={false}
              roundTop={false}
              errors={errors}
            />
            <TextInput
              label='Confirm password'
              elementId='confirm_password'
              {...passwordConfirmInputs}
              register={register}
              name='confirm_password'
              roundBottom
              roundTop={false}
              errors={errors}
            />
          </div>
          <PrivacyPolicy />

          <div>
            <button
              type='submit'
              data-testid='submit'
              id='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <LockIcon />
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
