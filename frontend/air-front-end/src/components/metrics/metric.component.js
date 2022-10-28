import BarChart from "./utils/Charts/barChart";
import LineChart from "./utils/Charts/lineChart";
import "./metric.component.css";
import React from 'react';
import DoughnutChart from "./utils/Charts/doughnutChart";
import ScatterChart from "./utils/Charts/scatterChart";




function metricComponent(){
    return (
        <div className="chart-statistics-grid ">

            <BarChart/>
            <LineChart/>
            <DoughnutChart/>
            <ScatterChart/>
        </div>



    );
}
export default metricComponent