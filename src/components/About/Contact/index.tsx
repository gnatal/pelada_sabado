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
          <li>E-mail: mymail@domain.com</li>
          <li>Phone: (+55) (DDD) 9-xxxx-xxxx</li>
          <li>Address: Street Nº 0, Fools neighborhood, NoState, NoCountry</li>
        </ul>
      </div>
    </div>
  );
}
