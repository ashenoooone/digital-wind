import { useSelector } from 'react-redux';

export const useMenu = () => {
  const { isMenuActive } = useSelector((state) => state.menu);
  return { isMenuActive };
};
