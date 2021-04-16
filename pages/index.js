import Head from 'next/head';
import Link from 'next/link';
import Header from '../layouts/Header/Header';
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
      <Header />
    </div>
  );
};

export default Home;
