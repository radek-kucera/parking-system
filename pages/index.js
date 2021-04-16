import Head from 'next/head';
import Link from 'next/link';
import TopBar from '../layouts/TopBar/TopBar';

// ZDE BUDE LENDING PAGE

const Home = () => {
  return (
    <div>
      <Head>
        <title>Welcome | park.it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <main></main>
    </div>
  );
};

export default Home;
