import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Doughnut = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        theme: "fusion",
        decimals: 0,
        pieRadius: "45%",
        animation: true,
        animationDuration: 3,
        alphaAnimation: true,
        paletteColors: " #F5F5F5, #3FC1C9 , #364F6B",
        showShadow: true,
      },
      data,
    },
  };

  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Doughnut;
