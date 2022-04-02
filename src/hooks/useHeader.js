import { useSelector } from 'react-redux';

export const useHeader = () => {
  const { isHeaderActive } = useSelector((state) => state.header);
  return { isHeaderActive };
};
