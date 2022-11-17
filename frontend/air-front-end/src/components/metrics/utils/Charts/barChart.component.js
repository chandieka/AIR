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

const BarChartComponent = () => {
   var data = {
        labels: ['Jan', 'Feb', 'Mar', 'May', 'Jun' ],
       datasets: [
       //     {
       //     label: "NO2",
       //     type: "line",
       //     borderColor: "rgba(92,231,82,0.69)",
       //     data: [408,547,675,734,1468],
       //     fill: false
       // }, {
       //     label: "PM10",
       //     type: "line",
       //     borderColor: "rgb(255,135,71)",
       //     data: [133,221,783,2478,3000],
       //     fill: false
       // },{
       //     label: "SO2",
       //     type: "line",
       //     borderColor: 'rgba(153, 102, 255, 0.8)',
       //     data: [233,621,1483,2078,3100],
       //     fill: false
       // },
           {
           label: "NO2",
           type: "bar",
           backgroundColor: "rgba(92,231,82,0.69)",
           data: [408,547,675,734,1468],
       }, {
           label: "PM10",
           type: "bar",
           backgroundColor: "rgb(255,135,71)",
           backgroundColorHover: "#3e95cd",
           data: [133,221,783,2478,3000]
       },{
           label: "SO2",
           type: "bar",
           backgroundColor: "rgb(153, 102, 255)",
           backgroundColorHover: "#3e95cd",
           data: [133,221,783,2478,3000]
       }
       ]
   }

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    return (
        <div className={'barChartComponent'} style={{}}>
            <Bar data={data} options={options}  />
        </div>
    )
}

export default BarChartComponent
/* eslint-enable */