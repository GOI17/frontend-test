import { memo } from "react";
import ReactApexChart from "react-apexcharts";

import "./PriceEvolutionChart.styles.css";

import useChart from "hooks/useChart/useChart";

const buildPriceEvolutionSeries = (data) => {
  const skuList = Object.keys(data);
  const getNameFromEachSkuList = (element) => element.name;
  const getPriceFromEachElement = (element) => element.price;
  const formattedList = skuList.map((key) => ({
    name: data[key].map(getNameFromEachSkuList)[0],
    data: data[key].map(getPriceFromEachElement),
  }));
  return formattedList;
};

const buildPriceEvolutionXaxis = (data) => {
  const skuList = Object.keys(data);
  const getDateExtractionFromEachElement = (element) => element.dateExtraction;
  const formattedList = skuList.flatMap((key) =>
    data[key].map(getDateExtractionFromEachElement)
  );
  return { categories: formattedList };
};

const PriceEvolutionChart = ({ data }) => {
  const { chartState } = useChart({
    colors: ["#D6215B", "#7530B2", "#FFB448"],
    id: "price-evolution-chart",
    series: buildPriceEvolutionSeries(data),
    options: {
      markers: {
        size: 0,
      },
    },
    xaxis: buildPriceEvolutionXaxis(data),
  });

  return (
    <ReactApexChart
      options={chartState.options}
      series={chartState.series}
      type="line"
      height={407}
      width={868}
    />
  );
};

export default memo(PriceEvolutionChart);
