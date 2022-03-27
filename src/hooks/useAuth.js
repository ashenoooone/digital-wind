import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { email, token, id, name, surname, phone } = useSelector(
    (state) => state.user
  );
  return {
    isAuth: !!email,
    email,
    token,
    id,
    phone,
    name,
    surname,
  };
};
