import Head from 'next/head';
import Copyright from '../../components/Copyright/Copyright';
import SignForm from '../../containers/forms/SignForm/SignForm';
import cls from './index.module.scss';
const Sign = () => {
  return (
    <div className={cls['body']}>
      <Head>
        <title>Sign in | park.it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cls['main']}>
        <SignForm />
        <Copyright />
      </main>
    </div>
  );
};

export default Sign;
