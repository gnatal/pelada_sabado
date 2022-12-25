import type { ReactElement } from 'react';
import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <NavBar blogName='Pelada da PM' />
      <main className='min-h-[80vh]'>{children}</main>
      <Footer />
    </>
  );
}
