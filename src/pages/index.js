import Head from 'next/head';
import AppLayout from '@components/AppLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bharath Sandepogu</title>
        <meta name="description" content="Bharath sandepogu's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppLayout />
    </>
  );
}
