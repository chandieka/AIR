import BarChart from "./utils/Charts/barChart.component";
import LineChartComponent from "./utils/Charts/lineChart.component";
import "./metric.component.css";
import React from 'react';
import DoughnutCharComponent from "./utils/Charts/doughnutChar.component";
import ScatterChartComponent from "./utils/Charts/scatterChart.component";

function MetricComponent(){
    return (
        <div className="chart-statistics-grid ">
            <DoughnutCharComponent/>
            <BarChart/>
            <LineChartComponent/>
            <ScatterChartComponent/>
        </div>
    );
}
export default MetricComponent