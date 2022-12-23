import React from 'react';

function MenuItem({
  linkURL,
  linkLabel,
}: {
  linkURL: string;
  linkLabel: string;
}) {
  return (
    <div className='w-screen pl-6 pb-2 pt-2 border'>
      <a
        href={linkURL}
        className='block font-bold text-md text-teal-100 hover:text-white'
      >
        {linkLabel}
      </a>
    </div>
  );
}

export default MenuItem;
