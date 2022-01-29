import "./PresenceShareByProduct.styles.css";

import PresenceShareByProductChart from "components/PresenceShareByProductChart";
import Subtitle from "components/Subtitle";

import useGetPresenceShareByProduct from "hooks/useGetPresenceShareByProduct";

const PresenceShareByProduct = () => {
  const state = useGetPresenceShareByProduct();

  const renderErrorMessage = () => <p>{state.error}</p>;

  return (
    <div className="PresenceShareByProduct">
      <Subtitle id="price-evolution" subtitle="Presence Share by Product" />
      <div className="card">
        <div className="card-content">
          {state.status.isFetchingData && <p>Fetching data...</p>}
          {state.status.isFetchingDone && (
            <div className="chart">
              <PresenceShareByProductChart data={state.data} />
            </div>
          )}
          {state.status.isFetchingFailed && renderErrorMessage()}
        </div>
      </div>
    </div>
  );
};

export default PresenceShareByProduct;
