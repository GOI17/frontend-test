import HttpResponseTypes from "config/HttpResponseTypes";

const initialReducerState = {
  status: {
    isFetchingData: false,
    isFetchingDone: false,
    isFetchingFailed: false,
  },
  error: null,
  data: null,
};

const serverRequestReducer = (state, action) => {
  const actionsTypes = {
    [HttpResponseTypes.IDLE]: {
      ...state,
      error: null,
      status: {
        isFetchingData: false,
        isFetchingDone: false,
        isFetchingFailed: false,
      },
      data: null,
    },
    [HttpResponseTypes.LOADING]: {
      ...state,
      error: null,
      status: {
        isFetchingData: true,
        isFetchingDone: false,
        isFetchingFailed: false,
      },
      data: null,
    },
    [HttpResponseTypes.SUCCESS]: {
      ...state,
      error: null,
      status: {
        isFetchingData: false,
        isFetchingDone: true,
        isFetchingFailed: false,
      },
      data: action.payload,
    },
    [HttpResponseTypes.FAILED]: {
      ...state,
      error: action.payload,
      status: {
        isFetchingData: false,
        isFetchingDone: false,
        isFetchingFailed: true,
      },
      data: null,
    },
  };

  const _action = actionsTypes[action.type];
  return _action;
};

const setIdleAction = () => ({ type: HttpResponseTypes.IDLE });
const setLoadingAction = () => ({ type: HttpResponseTypes.LOADING });
const setSuccessAction = (payload) => ({
  type: HttpResponseTypes.SUCCESS,
  payload,
});
const setFailedAction = (payload) => ({
  type: HttpResponseTypes.FAILED,
  payload,
});

export {
  initialReducerState,
  setIdleAction,
  setLoadingAction,
  setSuccessAction,
  setFailedAction,
};
export default serverRequestReducer;
