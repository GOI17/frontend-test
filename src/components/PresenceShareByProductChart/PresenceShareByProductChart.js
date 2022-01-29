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
    // colors: ["#D6215B", "#7530B2", "#FFB448"],
    id: "presence-chart",
    options: {
      chart: {},
      dataLabels: {
        enabled: false,
      },
    },
    series: buildPresenceShareByProductSeries(data),
    responsive: [{}],
    labels: buildPresenceShareByProductLabels(data),
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
