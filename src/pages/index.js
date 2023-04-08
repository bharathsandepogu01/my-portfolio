import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bharath Sandepogu</title>
        <meta name="description" content="Bharath sandepogu's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>{`Bharath Sandepogu's Portfolio`}</h1>
      </main>
    </>
  );
}
