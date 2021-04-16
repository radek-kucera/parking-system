import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Copyright from '../../components/Copyright/Copyright';
import SignForm from '../../containers/forms/SignForm/SignForm';
import cls from './index.module.scss';
import useUser from '../../hooks/useUser';

const Sign = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) router.push('/app');
  }, [user]);

  return (
    <div className={cls['body']}>
      <Head>
        <title>Sign in | park.it</title>
      </Head>

      <main className={cls['main']}>
        <SignForm />
        <Copyright />
      </main>
    </div>
  );
};

export default Sign;
