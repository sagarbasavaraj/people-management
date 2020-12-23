import { useCallback } from "react";
import { useHistory } from "react-router-dom";

function useNavigate() {
  const history = useHistory();

  const navigateTo = useCallback(
    (url) => {
      history.push(url);
    },
    [history]
  );

  return [navigateTo];
}

export default useNavigate;
