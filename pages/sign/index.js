import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Copyright from '../../components/Copyright/Copyright';
import SignForm from '../../containers/forms/SignForm/SignForm';
import useUser from '../../hooks/useUser';

const Sign = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) router.push('/app');
  }, [user]);

  return (
    <div>
      <Head>
        <title>Sign in | park.it</title>
      </Head>

      <main>
        <SignForm />
        <Copyright />
      </main>
    </div>
  );
};

export default Sign;
