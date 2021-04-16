import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useUser = () => {
  const tokens = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(tokens);
  }, [tokens]);

  return {
    tokens
  };
};

export default useUser;
