import serverRequestReducer, {
  initialReducerState,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
  setFailedAction,
} from "reducers/serverRequestReducer";

const priceEvolutionReducer = (...params) => serverRequestReducer(...params);

export {
  initialReducerState,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
  setFailedAction,
};
export default priceEvolutionReducer;
