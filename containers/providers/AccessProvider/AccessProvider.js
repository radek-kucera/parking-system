import { useRouter } from 'next/router';
import useUser from '../../../hooks/useUser';

const AccessProvider = ({ deny = [], children }) => {
  const { user } = useUser();

  if (deny.includes(user.role)) {
    return <></>;
  }

  return <>{children}</>;
};

export default AccessProvider;
