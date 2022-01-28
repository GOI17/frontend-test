import { useEffect, useReducer } from "react";

import getPriceEvolutionGroupBySku from "services/getPriceEvolutionGroupBySku";
import priceEvolutionReducer, {
  initialReducerState,
  setFailedAction,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
} from "./priceEvolutionReducer";

const useGetPriceEvolution = () => {
  const [state, dispatch] = useReducer(
    priceEvolutionReducer,
    initialReducerState
  );

  useEffect(() => {
    dispatch(setLoadingAction());
    getPriceEvolutionGroupBySku()
      .then((data) => dispatch(setSuccessAction(data)))
      .catch((error) => dispatch(setFailedAction(error)));
    return () => {
      dispatch(setIdleAction());
    };
  }, []);

  return state;
};

export default useGetPriceEvolution;
