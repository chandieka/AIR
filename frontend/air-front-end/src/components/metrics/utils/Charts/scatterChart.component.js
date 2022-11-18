/* eslint-disable */
import React from 'react'
import {Chart as ChartJs, LineElement, PointElement, LinearScale, CategoryScale, Legend} from 'chart.js';
import {Scatter} from 'react-chartjs-2';
import "./chart.css"

ChartJs.register(
    PointElement,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale
)

const ScatterChartComponent = () => {
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
    var data = {
        // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],

            datasets: [{
                data: [
                    {x: 17, y: 3},
                ],
                label: "NO2",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,

            }, {
                data: [
                    {x: 10, y: 3},
                ],
                label: "PM10",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

            }, {
                data: [
                    {x: 4, y: 4},
                ],
                label: "O3",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

            }, {
                data: [
                    {x: 14, y: 0}
                ],
                label: "SO2",
                borderColor: "#c45850",
                backgroundColor:"rgb(196,88,80,0.1)",
                borderWidth:2,
            }
            ],
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
        }

    return (
        <div className={'chart scatterChart'} >
            <Scatter aria-label={labels} data={data} options={options} />
        </div>
    )
}
export default ScatterChartComponent