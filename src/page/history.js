import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
let CanvasJS = CanvasJSReact.CanvasJS;




const History = ({init}) => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Stores"
    },
    axisX:{
      valueFormatString: "DD MMM YYYY",
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisY: {
      title: "Sales Report",
      includeZero: false,
      valueFormatString: "php##0.00",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function(e) {
          return "php" + CanvasJS.formatNumber(e.value, "##0.00");
        }
      }
    },
    data: [{
      type: "area",
      xValueFormatString: "DD MMM",
      yValueFormatString: "php##0.00",
      dataPoints: init
    }]
  }

  if(init.length !== 0) {
    return (
      <div className='history'>
        <div className="history-content l-padding">
          <h1 className="history-content-tag">Name of Store Tracker</h1>
          <CanvasJSChart options = {options} />
        </div>
      </div>
  );
  } else {
    return  (
      <div className="history">
        <div className="history-content l-padding">
          <p className='history-content-result'>No Save Result</p>
        </div>
      </div>
    )
  }


};

export default History;



 