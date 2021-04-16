import '../styles/globals.scss';
import { Provider } from 'react-redux';
import useStore from '../hooks/useStore';

const App = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
