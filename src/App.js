import React, {Component} from 'react';
import './App.css';
import Chart from 'chart.js';

export default class App extends Component {
  chartRef = React.createRef();

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    fetch("https://www.thebluealliance.com/api/v3/team/frc3490")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

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
    const { error, isLoaded, items} = this.state;
    return(
      <div>
        <canvas id="myChart" ref={this.chartRef}></canvas>
        <h1>{this.state.error? "True" : "False"}</h1>
      </div>
    )
  }
  
}


