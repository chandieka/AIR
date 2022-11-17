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
import "./chart.css"


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

    return(
        <div className={'chart mixedChart'}>
            <Line data={data}></Line>
        </div>
    )
}
export default MixedChartComponent