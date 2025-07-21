import { useLocation, useNavigate } from "react-router";

const useNavigation = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const redirectToPage = (path: string) => {
    navigate(path);
  };

  const getQueryParams = () => {
    return new URLSearchParams(search);
  }

  return { redirectToPage, getQueryParams };
};

export default useNavigation;