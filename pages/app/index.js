import Head from 'next/head';
import AuthProvider from '../../containers/providers/AuthProvider/AuthProvider';
import SpotInfo from '../../components/SpotInfo/SpotInfo';
import SpotInfo2 from '../../components/SpotInfo2/SpotInfo2';

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
          <SpotInfo2></SpotInfo2>
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
