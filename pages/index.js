import Head from 'next/head';
import Link from 'next/link';

// ZDE BUDE LENDING PAGE

const Home = () => {
  return (
    <div>
      <Head>
        <title>Welcome | park.it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/sign">
          <button>Get started BUM</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
