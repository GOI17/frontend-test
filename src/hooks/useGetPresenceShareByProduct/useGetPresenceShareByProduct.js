import { useEffect, useReducer } from "react";

import getPresenceShareByProduct from "services/getPresenceShareByProduct";
import priceEvolutionReducer, {
  initialReducerState,
  setFailedAction,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
} from "./presenceShareByProductReducer";

const useGetPresenceShareByProduct = () => {
  const [state, dispatch] = useReducer(
    priceEvolutionReducer,
    initialReducerState
  );

  useEffect(() => {
    dispatch(setLoadingAction());
    getPresenceShareByProduct()
      .then((data) => dispatch(setSuccessAction(data)))
      .catch((error) => dispatch(setFailedAction(error)));
    return () => {
      dispatch(setIdleAction());
    };
  }, []);

  return state;
};

export default useGetPresenceShareByProduct;
