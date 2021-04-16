import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import setAuth from '../actions/authActions';
import { URL_AUTH } from '../dotenv';
import { authorizedGet } from '../services/requestHelpers';

const useUser = () => {
  const tokens = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data, error, revalidate } = useSWR(URL_AUTH, authorizedGet);

  useEffect(() => {
    const areTokensStored = localStorage.getItem('auth');

    if (!tokens && areTokensStored) {
      dispatch(setAuth(JSON.parse(areTokensStored)));
    }
  }, []);

  useEffect(() => {
    if (error && tokens) dispatch(setAuth(null));
  }, [error]);

  useEffect(() => {
    if (tokens) revalidate();
  }, [tokens]);

  return {
    tokens,
    isError: !!error,
    user: data ? data.data.winstrom.uzivatel[0] : null,
    revalidate
  };
};

export default useUser;
