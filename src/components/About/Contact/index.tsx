import React from 'react';
import Texts from '../texts';

export default function Contact() {
  return (
    <div className='ml-2 mt-8'>
      <div>
        <h1 className='text-2xl'>{Texts.contactHeader}</h1>
      </div>
      <div className='mt-4 mb-20'>
        <ul>
          <li>E-mail: xxxx@gmail.com</li>
          <li>Telefone para contato: (+55) (DDD) 9-xxxx-xxxx</li>
          <li>Endereço :St. de Clubes Esportivos Sul 1 3 - Lago Sul, Brasília - DF, 70200-001</li>
        </ul>
      </div>
    </div>
  );
}
