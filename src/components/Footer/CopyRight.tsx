import React from 'react';

const COPY_RIGHT_LINK = 'https://github.com/gnatal';
const BRAND_NAME = 'Natal Inc';

export default function Copyright() {
  return (
    <div className='text-center p-4'>
      © 2022 Copyright:
      <a className='text-white' href={COPY_RIGHT_LINK}>
        {BRAND_NAME}
      </a>
    </div>
  );
}
