
import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Column = ({data}) => {

  const chartConfigs = {
    type: 'column2d',
    width:'100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Most Popular",
        "theme": "fusion",
        "xAxisName": "Repos",
        "yAxisName": "Stars",
        "xAxisNameFontSize": '16px',
        "yAxisNameFontSize": '16px',
        "animation": true,
        "animationDuration": 3,
        "alphaAnimation": true,
        "paletteColors": " #3FC1C9 , #364F6B",
        "showShadow": true
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



export default Column





