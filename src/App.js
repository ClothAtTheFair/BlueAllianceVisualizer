import React, {Component} from 'react';
import './App.css';
import Chart from 'chart.js';

export default class App extends Component {
  chartRef = React.createRef();

  componentDidMount(){
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: 'scatter',
      data: {
        //Bring in data
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: -10,
            y: 0
          }, {
            x: 0, 
            y: 0
          }, {
            x: 10,
            y: 5
          }]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear', 
            position: 'bottom'
          }]
        }
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


