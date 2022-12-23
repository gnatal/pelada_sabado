import type { ReactElement } from 'react';
import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <NavBar blogName='Blog do Natal' />
      <main className='min-h-[80vh]'>{children}</main>
      <Footer />
    </>
  );
}
