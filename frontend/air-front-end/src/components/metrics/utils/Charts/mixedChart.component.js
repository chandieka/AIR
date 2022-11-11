/* eslint-disable */
import {
    Chart as ChartJs,
    PointElement,
    Tooltip,
    LinearScale,
    CategoryScale,
    LineElement,
    Legend
}
from 'chart.js';
import {Line} from 'react-chartjs-2'
import React from 'react'
import "./chartStyle.css"


ChartJs.register(
    [Tooltip],
    PointElement,
    LineElement,
    LinearScale,
    CategoryScale,
    Legend
)

const MixedChartComponent = () => {
    const options = {
        options: {
            title: {
                display: true,
                text: 'Population growth (millions): Europe & Africa'
            },
            legend: { display: true }
        }
    };

    var data = {
        labels: ["Jan","Feb","Mar","Apr","May"],
        plugin: {
            title: {
                display: true,
                title: 'Pollutant concentrations for different values of AQI',
            }
        },
        datasets: [{
            label: "NO2",
            type: "line",
            borderColor: "rgba(92,231,82,0.69)",
            data: [408,547,675,734,1468],
            fill: false
        }, {
            label: "PM10",
            type: "line",
            borderColor: "rgb(255,135,71)",
            data: [133,221,783,2478,3000],
            fill: false
        },{
            label: "SO2",
            type: "line",
            borderColor: 'rgba(153, 102, 255, 0.8)',
            data: [233,621,1483,2078,3100],
            fill: false
        }, {
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
    };

   /* const data = {
        labels: 'Label',
            datasets: [{
                label: "Europe",
                type: "line",
                borderColor: "#8e5ea2",
                data: [408,547,675,734],
                fill: false
            }, {
                label: "Africa",
                type: "line",
                borderColor: "#3e95cd",
                data: [133,221,783,2478],
                fill: false
            }, {
                label: "Europe",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                data: [408,547,675,734],
            }, {
                label: "Africa",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                backgroundColorHover: "#3e95cd",
                data: [133,221,783,2478]
            }
            ]
        };*/


// /*             actions = [
//         {
//             name: 'Randomize',
//             handler(chart) {
//                 chart.data.datasets.forEach(dataset => {
//                     dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
//                 });
//                 chart.update();
//             }
//         },
//     ];*/

// /*    const config = {
//         type: 'line',
//         data: data,
//         options: {
//             responsive: true,
//             interaction: {
//                 mode: 'index',
//                 intersect: false,
//             },
//             stacked: false,
//             plugins: {
//                 title: {
//                     display: true,
//                     text: 'Chart.js Line Chart - Multi Axis'
//                 }
//             },
//             scales: {
//                 y: {
//                     type: 'linear',
//                     display: true,
//                     position: 'left',
//                 },
//                 y1: {
//                     type: 'linear',
//                     display: true,
//                     position: 'right',
//
//                     // grid line settings
//                     grid: {
//                         drawOnChartArea: false, // only want the grid lines for one axis to show up
//                     },
//                 },
//             }
//         },
//     };*/
    return(
        <div className={'mixedChart'}>
            <Line data={data}></Line>
        </div>
    )
}
export default MixedChartComponent