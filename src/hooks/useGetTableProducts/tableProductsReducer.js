import serverRequestReducer, {
  initialReducerState,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
  setFailedAction,
} from "reducers/serverRequestReducer";

const tableProductsReducer = (...params) => serverRequestReducer(...params);

export {
  initialReducerState,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
  setFailedAction,
};
export default tableProductsReducer;
