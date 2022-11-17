import BarChart from "./utils/Charts/barChart.component";
import LineChartComponent from "./utils/Charts/lineChart.component";
import "./metric.component.css";
import React from 'react';
import DoughnutCharComponent from "./utils/Charts/doughnutChar.component";
import ScatterChartComponent from "./utils/Charts/scatterChart.component";
import MixedChartComponent from "./utils/Charts/mixedChart.component";

function MetricComponent(){
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