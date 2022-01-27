import { useState } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

const initialState = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

const ApexChart = ({ height, type, options, series, width }) => {
  const [chartState] = useState(initialState);

  return (
    <ReactApexChart
      options={chartState.options}
      series={chartState.series}
      type={type}
      height={height}
      width={width}
    />
  );
};

export default ApexChart;

ApexChart.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
