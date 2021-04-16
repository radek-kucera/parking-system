import Head from 'next/head';
import AuthProvider from '../../containers/providers/AuthProvider/AuthProvider';
import SpotInfo from '../../components/SpotInfo/SpotInfo';

const App = () => {
  return (
    <div>
      <Head>
        <title>App | park.it</title>
      </Head>

      <AuthProvider>
        <main>
          <h1>Appka lol :)</h1>
          <SpotInfo></SpotInfo>
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
