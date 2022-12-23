import React from 'react';
import Texts from '../texts';

export default function Mission() {
  return (
    <div className='ml-2 mt-8'>
      <div>
        <h1 className='text-2xl'>{Texts.missionHeader}</h1>
      </div>
      <div className='mt-4'>
        <p>{Texts.missionStatement}</p>
      </div>
    </div>
  );
}
