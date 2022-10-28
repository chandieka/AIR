/* eslint-disable */
import React from 'react'
import {Chart as ChartJs, LineElement, PointElement, LinearScale, CategoryScale, Legend} from 'chart.js';
import {Scatter} from 'react-chartjs-2';
import "./chartStyle.css"

ChartJs.register(
    PointElement,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale
)
const chartRefference = document.getElementById('LineChart')

const ScatterChart = () => {
    const labels = ['first','second','third','fourth','fifth','sixth','seventh']

    var options = {
        options: {
            showTooltips: true,
            responsive: true,
            aspectRatio: 2,
            tooltip: {
                enabled: true
            }
        }
    }
    /*  const data = {
          labels: labels,
          datasets: [{
              data: [0, 0],
          }, {
              data: [0, 1]
          }, {
              data: [1, 0],
              showLine: true // overrides the `line` dataset default
          }, {
              type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
              data: [1, 1]
          }]
      }*/

    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data:  [{
                x: -10,
                y: 0
            }, {
                x: 4,
                y: 10
            }, {
                x: 10,
                y: 5
            }, {
                x: 1,
                y: 5.5
            }],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    return (
        <div id={'scatterChart'} >
            <Scatter aria-label={labels} data={data} options={options} />
        </div>
    )
}

export default ScatterChart
/* eslint-enable */