import Head from 'next/head';
import AuthProvider from '../../containers/providers/AuthProvider/AuthProvider';
import SpotInfo from '../../components/SpotInfo/SpotInfo';
import SpotInfo2 from '../../components/SpotInfo2/SpotInfo2';
import { userRoles } from '../../constants/userRoles';
import AccessProvider from '../../containers/providers/AccessProvider/AccessProvider';
import useParkingSpots from '../../hooks/useParkingSpots';

const App = () => {
  const { sensorsData } = useParkingSpots();
  return (
    <div>
      <Head>
        <title>App | park.it</title>
      </Head>

      <AuthProvider>
        <main>
          <h1>Appka lol :)</h1>
          <button onClick={console.log(sensorsData)} />
          <AccessProvider deny={[userRoles.user]}>
            <SpotInfo></SpotInfo>
          </AccessProvider>
          <SpotInfo2></SpotInfo2>
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
