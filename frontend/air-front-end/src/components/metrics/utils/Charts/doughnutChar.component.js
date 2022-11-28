/* eslint-disable */
import React from 'react'
import {
    Chart as ChartJs,
    PointElement,
    LinearScale,
    CategoryScale,
    ArcElement,
    Legend
} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
import "./chart.css"

ChartJs.register(
    ArcElement,
    PointElement,
    Legend,
    LinearScale,
    CategoryScale
)

const DoughnutCharComponent = () => {
    const labels = ['first','second','third','fourth','fifth','sixth','seventh']
    var options = {
        options: {
            responsive: true,
            maintainAspectRatio: true,

        tooltip: {
                enabled: true
        }
        }
    }
    var data = {
        labels: ['NO2', 'PM10', 'O3', 'PM2.5','SO2'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return (
        <div className={'chart doughnutChart'}>
            <Doughnut aria-label={labels} data={data} options={options} style={{height: "200px", width: "200px"}}/>
        </div>
    )
}
export default DoughnutCharComponent