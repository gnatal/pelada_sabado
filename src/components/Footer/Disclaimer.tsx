import React from 'react';

const DISCLAIMER_TEXT = 'A really long text';

export default function Disclaimer() {
  return (
    <div className='mb-6'>
      <p>{DISCLAIMER_TEXT}</p>
    </div>
  );
}
