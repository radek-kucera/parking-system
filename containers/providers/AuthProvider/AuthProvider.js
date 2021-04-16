import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUser from '../../../hooks/useUser';

const AuthProvider = ({ children }) => {
  const { user, isError } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isError) router.push('/sign');
  }, [isError]);

  if (user) {
    console.log(user);

    return <>{children}</>;
  }

  return <></>;
};

export default AuthProvider;
