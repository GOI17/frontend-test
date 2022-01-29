import serverRequestReducer, {
  initialReducerState,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
  setFailedAction,
} from "reducers/serverRequestReducer";

const presenceShareByProductReducer = (...params) =>
  serverRequestReducer(...params);

export {
  initialReducerState,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
  setFailedAction,
};
export default presenceShareByProductReducer;
