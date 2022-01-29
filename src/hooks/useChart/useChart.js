const { useState } = require("react");

const useChart = ({ colors, id, labels, options, series, xaxis }) => {
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
        id,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      xaxis,
      colors,
      ...options,
    },
    series,
    labels,
  });

  return { chartState };
};

export default useChart;
