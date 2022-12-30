import React from 'react';
import FirstSection from './FirstSection';
import SecondSession from './SecondSection';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Futebol de sábado</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FirstSection />
      <SecondSession />
    </div>
  );
}
