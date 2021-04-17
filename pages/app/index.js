import Head from 'next/head';
import AuthProvider from '../../containers/providers/AuthProvider/AuthProvider';
import SpotInfo from '../../components/SpotInfo/SpotInfo';
import { userRoles } from '../../constants/userRoles';
import AccessProvider from '../../containers/providers/AccessProvider/AccessProvider';
import useParkingSpots from '../../hooks/useParkingSpots';
import useEvent from '../../hooks/useEvent';
import useUser from '../../hooks/useUser';
import CarSpots from '../../containers/carSpots/CarSpots';

const App = () => {
  const { events, getUserReservations } = useEvent();
  const { user } = useUser();

  const reservations = user && events ? getUserReservations(user.kod) : null;

  return (
    <div>
      <Head>
        <title>App | park.it</title>
      </Head>

      <AuthProvider>
        <main>
          <AccessProvider deny={[userRoles.admin]}>
            <SpotInfo />
            <SpotInfo hasReservation={isReserved} />
            <CarSpots userReservations={reservations} />
          </AccessProvider>
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
