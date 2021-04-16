import Head from 'next/head';
import Copyright from '../../components/Copyright/Copyright';
import SignForm from '../../containers/forms/SignForm/SignForm';

const Sign = () => {
  return (
    <div>
      <Head>
        <title>Sign in | park.it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignForm />
        <Copyright />
      </main>
    </div>
  );
};

export default Sign;