const { useState } = require("react");

const useChart = (chartOptions) => {
  const [chartState] = useState({
    options: {
      chart: {
        animations: {
          enabled: false,
        },
        background: "#fff",
        dropShadow: {
          enabled: false,
        },
        events: {},
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
    },
    ...chartOptions,
  });

  return { chartState };
};

export default useChart;
