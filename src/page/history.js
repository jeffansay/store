import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
let CanvasJS = CanvasJSReact.CanvasJS;




const History = ({test, total, testOne}) => {

  console.log(testOne, 'history.js')
  const holder = [];
  // const [dataStorage, setDataStorage] = useState([]);
  const list = total.map((gross, ) => {
    return (holder.push({x: new Date(`${gross.dates}`), y: gross.total}))
  })

  const save = e => {
    if(test) {
      // setData
      localStorage.setItem('test', JSON.stringify(holder))
    //   // getData
    //  const holdItemDataRefresh = localStorage.getItem('test');
    //   setDataStorage([holdItemDataRefresh]);

    }
  }

  useEffect(() => {
    save()
  }, [test])

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
      dataPoints: holder
    }]
  }


  // console.log(dataStorage)
    return (
        <div className='history'>
          <div className="history-content l-padding">
            <h1 className="history-content-tag">Name of Store Tracker</h1>
            <CanvasJSChart options = {options} />

          </div>
			
        </div>
    );
};

export default History;



 