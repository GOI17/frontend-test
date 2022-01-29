import { memo } from "react";
import ReactApexChart from "react-apexcharts";

import useChart from "hooks/useChart/useChart";

const buildPresenceShareByProductSeries = (data) => {
  const formattedList = data.map((element) => element.presenceShare);
  return formattedList;
};

const buildPresenceShareByProductLabels = (data) => {
  const formattedList = data.map((element) => element.name);
  return formattedList;
};

const PresenceShareByProductChart = ({ data }) => {
  const { chartState } = useChart({
    options: {
      colors: ["#D6215B", "#FF7A00", "#7530B2", "#23B794", "#006FFF"],
      dataLabels: {
        enabled: false,
      },
      id: "presence-chart",
      labels: buildPresenceShareByProductLabels(data),
    },
    series: buildPresenceShareByProductSeries(data),
  });

  return (
    <ReactApexChart
      options={chartState.options}
      series={chartState.series}
      type="pie"
      height={407}
      width={500}
    />
  );
};

export default memo(PresenceShareByProductChart);
