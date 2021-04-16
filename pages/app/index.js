import Head from 'next/head';
import AuthProvider from '../../containers/providers/AuthProvider/AuthProvider';

const App = () => {
  return (
    <div>
      <Head>
        <title>App | park.it</title>
      </Head>

      <AuthProvider>
        <main>
          <h1>Appka lol :)</h1>
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
