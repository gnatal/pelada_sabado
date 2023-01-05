import React, { type FormEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { peladaSchema } from './validations';
import LockIcon from '../Icons/LockIcons';
import TextInput from '../Form/Input';
import PeladaHeader from './CreatePeladaHeader';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { IPelada } from 'firebase_support/models/Pelada';
import { createPelada } from 'firebase_support/controller/PeladaController';

const diaInputs = {
  name: 'dia',
  type: 'date',
  placeholder: 'Dia',
};

const horaInputs = {
  name: 'hora',
  type: 'text',
  placeholder: 'Hora',
};

export default function CreatePelada() {
  const router = useRouter();
  const formOptions = { resolver: yupResolver(peladaSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPelada>(formOptions);

  const onSubmit: SubmitHandler<IPelada> = async (data) => {
    try {
      const response = await createPelada(data)
      toast('Pelada criada com sucesso', { hideProgressBar: true, autoClose: 2000, type: 'success' })
      router.replace('/peladas')
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <PeladaHeader />
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <TextInput
              label='Dia da pelada'
              elementId='dia'
              register={register}
              {...diaInputs}
              errors={errors}
              roundBottom={false}
              roundTop
            />
            <TextInput
              label='Hora'
              elementId='hora'
              register={register}
              {...horaInputs}
              errors={errors}
              roundBottom
              roundTop={false}
            />
          </div>

          <div>
            <button
              type='submit'
              data-testid='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <LockIcon />
              Criar pelada
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}