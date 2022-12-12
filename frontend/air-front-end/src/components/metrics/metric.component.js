/* eslint-disable */
import BarChart from "./utils/Charts/barChart.component";
import LineChartComponent from "./utils/Charts/lineChart.component";
import "./metric.component.css";
import React, { useEffect, useRef, useState } from 'react';
import DoughnutCharComponent from "./utils/Charts/doughnutChar.component";
import ScatterChartComponent from "./utils/Charts/scatterChart.component";
import MixedChartComponent from "./utils/Charts/mixedChart.component";
import axios from "axios";

function MetricComponent(){
    const API_PATH = "http://127.0.0.1:8000/api/compounds/"
    const data = useRef()

    async function getData() {
        let result = await fetch(API_PATH);
        result = await result.json();
        data.current = await JSON.parse(result);
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div className="p-2">
            <div className="metric-options mb-2">

            </div>
            <div className="metric-container">
                <div className="metric">
                    <MixedChartComponent/>
                </div>
                <div className="metric">
                    <BarChart/>
                </div>
                <div className="metric">
                    <LineChartComponent/>
                </div>
                <div className="metric">
                    <LineChartComponent/>
                </div>
                <div className="metric">
                    <LineChartComponent/>
                </div>
                <div className="metric">
                    <ScatterChartComponent/>
                </div>
                <div className="metric">
                    <DoughnutCharComponent/>
                </div>
            </div>
        </div>
    );
}
export default MetricComponent