import { memo, useState } from "react";
import ReactApexChart from "react-apexcharts";

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

const PriceEvolutionChartStyles = {
  backgroundColor: "white",
  padding: "2rem 2rem 2rem 3rem",
};

const PriceEvolutionChart = ({ data }) => {
  const series = buildPriceEvolutionSeries(data);
  const xaxis = buildPriceEvolutionXaxis(data);
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
        id: "price-evolution-chart",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      xaxis,
      colors: ["#D6215B", "#7530B2", "#FFB448"],
    },
    series,
  });

  return (
    <div style={PriceEvolutionChartStyles}>
      <ReactApexChart
        height={407}
        options={chartState.options}
        series={chartState.series}
        type="line"
        width={868}
      />
    </div>
  );
};

export default memo(PriceEvolutionChart);
