/* eslint-disable */
import React from 'react'
import {Chart as ChartJs, BarElement, LinearScale, CategoryScale, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import "./chartStyle.css"


ChartJs.register(
    BarElement,
    LinearScale,
    CategoryScale,
    Legend
)
// const chartRefference = document.getElementById('barChart')

const barChart = () => {
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

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
       /* <div id={'barChart'} style={{ backgroundColor:'white', height:'30vh',width:'60vh',borderRadius:'20px'}}>
            <Bar data={data} options={options}  />
        </div>*/
        <div id={'barChart'} style={{}}>
            <Bar data={data} options={options}  />
        </div>
    )
}

export default barChart
/* eslint-enable */