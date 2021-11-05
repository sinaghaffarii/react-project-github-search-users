import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Bar = ({ data }) => {
  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Forks",
        theme: "fusion",
        animation: true,
        animationDuration: 3,
        alphaAnimation: true,
        paletteColors: " #3FC1C9 , #364F6B",
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

export default Bar;
