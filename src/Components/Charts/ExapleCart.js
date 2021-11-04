import React from 'react';
import styled from 'styled-components';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const ExampleChart = ({data}) => {

  const chartConfigs = {
    type: 'column3d',
    width:400 ,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Languages",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
      },
      data 
    }
  }
  


  return (
    <div>
           <ReactFC {...chartConfigs}  />
    </div>
  )
}



export default ExampleChart