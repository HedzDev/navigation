import Menu from '@/components/Menu';
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Navigation</title>
      </Head>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
