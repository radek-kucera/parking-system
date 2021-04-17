import { useRouter } from 'next/router';
import useUser from '../../../hooks/useUser';

const AccessProvider = ({ deny = [], access = [], children }) => {
  const { user } = useUser();

  if (access.includes(user.role)) {
    return <>{children}</>;
  }

  if (deny.includes(user.role)) {
    return <></>;
  }

  return <>{children}</>;
};

export default AccessProvider;
