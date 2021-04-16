import Head from 'next/head';
import AuthProvider from '../../containers/providers/AuthProvider/AuthProvider';
import ReservationPopup from '../../components/ReservationPopup/ReservationPopup';
import useEvent from '../../hooks/useEvent';

const App = () => {
  const { create, remove, update, getUpcomingEvents } = useEvent();

  return (
    <div>
      <Head>
        <title>App | park.it</title>
      </Head>

      <AuthProvider>
        <main>
          <h1>Appka lol :)</h1>
          <button
            onClick={() =>
              update({
                winstrom: {
                  udalost: [
                    {
                      id: 68,
                      zodpPrac: 'code:admin',
                      zahajeni: '2020-04-15T11:00:00',
                      dokonceni: '2020-04-15T11:30:00',
                      predmet: 'lmao, it changed xd',
                      zakazka: 'code:101'
                    }
                  ]
                }
              })
            }
          />
          <br />
          <button onClick={getUpcomingEvents} />
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
