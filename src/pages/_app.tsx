import React from 'react';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
