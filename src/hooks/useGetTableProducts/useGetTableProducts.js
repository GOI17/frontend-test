import { useEffect, useReducer } from "react";

import getTableProducts from "services/getTableProducts";
import priceEvolutionReducer, {
  initialReducerState,
  setFailedAction,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
} from "./tableProductsReducer";

const useGetTableProducts = () => {
  const [state, dispatch] = useReducer(
    priceEvolutionReducer,
    initialReducerState
  );

  useEffect(() => {
    dispatch(setLoadingAction());
    getTableProducts()
      .then((data) => dispatch(setSuccessAction(data)))
      .catch((error) => dispatch(setFailedAction(error)));
    return () => {
      dispatch(setIdleAction());
    };
  }, []);

  return state;
};

export default useGetTableProducts;
