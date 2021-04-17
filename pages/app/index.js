import Head from 'next/head';
import AuthProvider from '../../containers/providers/AuthProvider/AuthProvider';
import SpotInfo from '../../components/SpotInfo/SpotInfo';
import { userRoles } from '../../constants/userRoles';
import AccessProvider from '../../containers/providers/AccessProvider/AccessProvider';
import useParkingSpots from '../../hooks/useParkingSpots';
import useEvent from '../../hooks/useEvent';
import useUser from '../../hooks/useUser';

const App = () => {
  const { userHasReservation, events } = useEvent();
  const { user } = useUser();

  const isReserved = user && events ? userHasReservation(user.kod) : null;

  return (
    <div>
      <Head>
        <title>App | park.it</title>
      </Head>

      <AuthProvider>
        <main>
          <h1>Appka lol :)</h1>
          <AccessProvider deny={[userRoles.admin]}>
            <SpotInfo hasReservation={isReserved} />
          </AccessProvider>
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
