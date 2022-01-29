import "./PriceEvolution.styles.css";

import PriceEvolutionChart from "components/PriceEvolutionChart";
import Subtitle from "components/Subtitle";

import useGetPriceEvolution from "hooks/useGetPriceEvolution";

const PriceEvolution = () => {
  const state = useGetPriceEvolution();

  const renderErrorMessage = () => <p>{state.error}</p>;

  return (
    <div className="PriceEvolution">
      <Subtitle id="price-evolution" subtitle="Price Evolution" />
      <div className="card">
        <div className="card-content">
          {state.status.isFetchingData && <p>Fetching data...</p>}
          {state.status.isFetchingDone && (
            <div className="chart">
              <PriceEvolutionChart data={state.data} />
            </div>
          )}
          {state.status.isFetchingFailed && renderErrorMessage()}
        </div>
      </div>
    </div>
  );
};

export default PriceEvolution;
