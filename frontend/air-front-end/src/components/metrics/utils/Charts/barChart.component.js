/* eslint-disable */
import React from 'react'
import {Chart as ChartJs, BarElement, LinearScale, CategoryScale, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import "./chart.css"
import axios from "axios";

ChartJs.register(
    BarElement,
    LinearScale,
    CategoryScale,
    Legend
)
let jsonRetrievedInfo
// const valueArray = JSON.parse(this.state.stringData)
// const BarChartComponent = () => {
//
//    var data = {
//         labels: ['Jan', 'Feb', 'Mar', 'May', 'Jun' ],
//        datasets: [
//            {
//            label: "NO2",
//            type: "line",
//            borderColor: "rgba(92,231,82,0.69)",
//            data: [408,547,675,734,1468],
//            fill: false
//        }, {
//            label: "PM10",
//            type: "line",
//            borderColor: "rgb(255,135,71)",
//            data: [133,221,783,2478,3000],
//            fill: false
//        },{
//            label: "SO2",
//            type: "line",
//            borderColor: 'rgba(153, 102, 255, 0.8)',
//            data: [233,621,1483,2078,3100],
//            fill: false
//        },
//            {
//            label: "NO2",
//            type: "bar",
//            backgroundColor: "rgba(92,231,82,0.69)",
//            data: [408,547,675,734,1468],
//        }, {
//            label: "PM10",
//            type: "bar",
//            backgroundColor: "rgb(255,135,71)",
//            backgroundColorHover: "#3e95cd",
//            data: [133,221,783,2478,3000]
//        },{
//            label: "SO2",
//            type: "bar",
//            backgroundColor: "rgb(153, 102, 255)",
//            backgroundColorHover: "#3e95cd",
//            data: [133,221,783,2478,3000]
//        }
//        ]
//    }
//
//     var options = {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
//
//     return (
//         <div className={'chart barChartComponent'} style={{}}>
//             <Bar data={data} options={options}  />
//         </div>
//     )
//
// }


class BarChartComponent extends React.Component{
    // state={
    //     DataS:[]
    // }


    // componentDidMount() {

    //         axios.get('http://localhost:8000/airQuality/date/')
    //             .then((response) => {
    //              jsonRetrievedInfo = response.data
    //              console.log("Json",jsonRetrievedInfo['date']);

    //         }).catch(err=> {
    //             console.log(err);
    //         });
    //     }


    render(){
        // const myArr = JSON.parse(jsonRetrievedInfo);
        // console.log(myArr)

        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'May', 'Jun' ],
            datasets: [
                {
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
                },
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
        // const airData=this.state.data;
        // const row = airData.map((air) =>
        // <div>
        //     <p>{air}</p>
        // </div>
        // );
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

        return (
            <div className={'chart barChartComponent'} style={{}}>
                <Bar data={data} options={options}  />
                <p>{jsonRetrievedInfo}</p>

            </div>
        )
    }
}

export default BarChartComponent
/* eslint-enable */