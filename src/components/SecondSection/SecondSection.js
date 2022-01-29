import "./SecondSection.styles.css";

import Subtitle from "components/Subtitle";
import ComparativeAnalysisTable from "components/ComparativeAnalysisTable";

import useGetTableProducts from "hooks/useGetTableProducts";

const SecondSection = () => {
  const state = useGetTableProducts();

  const renderErrorMessage = () => <p>{state.error}</p>;

  return (
    <section className="SecondSection">
      <Subtitle id="comparative-analysis" subtitle="Comparative Analysis" />
      {state.status.isFetchingData && <p>Fetching data...</p>}
      {state.status.isFetchingDone && (
        <ComparativeAnalysisTable data={state.data} />
      )}
      {state.status.isFetchingFailed && renderErrorMessage()}
    </section>
  );
};

export default SecondSection;
