

import React from 'react';
import  './scss/components/__chartwallet.scss';

const BarChart = require('react-chartjs-2').Bar;

class Chart extends React.Component {
    constructor() {
        super();
        const data = {
            labels: ["August 10", "August 20", "August 30", "September 10", "September 20",],
            datasets: [{
                label: "Total Revenue",
                backgroundColor: [
                    ' #54DFC5;',
                    ' #54DFC5;',
                    ' #54DFC5;',
                    ' #F0F0F0;'
               
                ],
              
              
                data: [35, 20, 30, 45, 26, 60],
            }]
        };
        const options = {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        this.state = {
            chartData: data,
            chartOptions: options,
        };
    }
    render() {
        const { chartData, chartOptions } = this.state;
        return (
            <div>
                <BarChart data={chartData} options={chartOptions} width="300" height="450" />
            </div>
        )
    }
}
export default Chart;