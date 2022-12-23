import type { ReactElement } from 'react';
import React from 'react';

interface IBanner {
  children: ReactElement;
}

const BACK_GROUND_IMAGE = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

export default function Banner({ children }: IBanner) {
  return (
    <div
      className='w-full bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${BACK_GROUND_IMAGE})` }}
    >
      {children}
    </div>
  );
}
