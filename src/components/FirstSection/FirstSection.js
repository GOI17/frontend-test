import React, { useEffect, useReducer } from "react";

import ApexChart from "components/ApexChart";
import Subtitle from "components/Subtitle/Subtitle";
import getPriceEvolutionGroupBySku from "services/getPriceEvolutionGroupBySku";

const firstSectionStyles = {
  display: "flex",
  marginLeft: 28,
};

const ResponseTypes = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  FAILED: "failed",
};

const priceEvolutionReducer = (state, action) => {
  const actionsTypes = {
    [ResponseTypes.IDLE]: {
      ...state,
      error: null,
      status: ResponseTypes.IDLE,
      data: null,
    },
    [ResponseTypes.LOADING]: {
      ...state,
      error: null,
      status: ResponseTypes.LOADING,
      data: null,
    },
    [ResponseTypes.SUCCESS]: {
      ...state,
      error: null,
      status: ResponseTypes.SUCCESS,
      data: action.payload,
    },
    [ResponseTypes.FAILED]: {
      ...state,
      error: action.payload,
      status: ResponseTypes.FAILED,
      data: null,
    },
  };

  return actionsTypes[action.type];
};

const useGetPriceEvolution = () => {
  const [state, dispatch] = useReducer(priceEvolutionReducer, {
    status: ResponseTypes.IDLE,
    error: null,
    data: null,
  });

  useEffect(() => {
    dispatch({ type: ResponseTypes.LOADING });
    getPriceEvolutionGroupBySku()
      .then((data) => dispatch({ type: ResponseTypes.SUCCESS, payload: data }))
      .catch((error) =>
        dispatch({ type: ResponseTypes.FAILED, payload: error })
      );
  }, []);

  return state;
};

const PriceEvolution = () => {
  const state = useGetPriceEvolution();
  const isFetchingData =
    state.status === ResponseTypes.LOADING ||
    state.status === ResponseTypes.IDLE;
  const isFetchingDone = state.status === ResponseTypes.SUCCESS;
  const isFetchingFailed = state.status === ResponseTypes.FAILED;

  const renderData = (data) => data.map((el) => el.name);

  const renderEvolutionData = () => {
    const dataKeys = Object.keys(state.data);
    return dataKeys.map((key) => renderData(state.data[key]));
  };

  const renderErrorMessage = () => <p>{state.error}</p>;

  return (
    <div>
      <Subtitle id="price-evolution" subtitle="Price Evolution" />
      {isFetchingData && <p>Fetching data...</p>}
      {isFetchingDone && renderEvolutionData()}
      {isFetchingFailed && renderErrorMessage()}
      <ApexChart height={407} width={868} />
    </div>
  );
};

const FirstSection = () => {
  return (
    <section style={firstSectionStyles}>
      <PriceEvolution />
      <div>
        <Subtitle
          id="presence-share-by-product"
          subtitle="Presence Share by Product"
        />
        <ApexChart height={407} width={500} type="donut" />
      </div>
    </section>
  );
};

export default FirstSection;
