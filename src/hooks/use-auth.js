import {useSelector} from 'react-redux';

const useAuth = () => {
  const {
    id,
    firstName,
    lastName,
    email,
    secureCode,
    password,
  } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    id,
    firstName,
    lastName,
    email,
    secureCode,
    password,
  };
};

export default useAuth;
