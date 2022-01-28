import PriceEvolutionChart from "components/PriceEvolutionChart";
import Subtitle from "components/Subtitle/Subtitle";

import useGetPriceEvolution from "hooks/useGetPriceEvolution";

const PriceEvolution = () => {
  const state = useGetPriceEvolution();

  const renderErrorMessage = () => <p>{state.error}</p>;

  return (
    <div>
      <Subtitle id="price-evolution" subtitle="Price Evolution" />
      {state.status.isFetchingData && <p>Fetching data...</p>}
      {state.status.isFetchingDone && <PriceEvolutionChart data={state.data} />}
      {state.status.isFetchingFailed && renderErrorMessage()}
    </div>
  );
};

export default PriceEvolution;
