/* eslint-disable */
import React from 'react'
import {Chart as ChartJs, LineElement, PointElement, Tooltip, LinearScale, CategoryScale, Legend} from 'chart.js';
import {Line} from 'react-chartjs-2';
import "./chartStyle.css"

ChartJs.register(
    [Tooltip],
    PointElement,
    LineElement,
    LinearScale,
    CategoryScale,
    Legend
)
const chartRefference = document.getElementById('LineChart')

const LineChart = () => {
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
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
        <div id={'lineChart'} >
            <Line aria-label={labels} data={data} options={options} />
        </div>
    )
}

export default LineChart
/* eslint-enable */