import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop - наш лучший топ!</title>
    </Head>
    <Component {...pageProps} />
  </>
} 

export default MyApp;
