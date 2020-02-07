import React, {Component} from 'react';
import './App.css';
import Chart from 'chart.js';

export default class template extends Component {
  chartRef = React.createRef();

  componentDidMount(){
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 69, 420],
          }
        ]
      },
      options: {
        //Customize chart
      }
    });
  }

  render() {
    return(
      <div>
        <canvas id="myChart" ref={this.chartRef}></canvas>
      </div>
    )
  }
  
}
