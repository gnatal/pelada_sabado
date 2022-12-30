import React from 'react';
import Texts from '../texts';

export default function Values() {
  return (
    <div className='ml-2 mt-8'>
      <div>
        <h1 className='text-2xl'>{Texts.valuesHeader}</h1>
      </div>
      <div className='mt-4'>
        <p>{Texts.valuesStatement}</p>
      </div>
    </div>
  );
}
