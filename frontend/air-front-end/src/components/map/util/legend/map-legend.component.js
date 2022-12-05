import React from "react";
import './map-legend.css';
import {getColor} from "../../data-layers/boundaries.component";

function MapLegend() {
    const listValueAndColorAqi = [
        {
            minValue: 0,
            maxValue: 10,
            color: getColor(5)
        },
        {
            minValue: 10,
            maxValue: 20,
            color: getColor(15)
        },
        {
            minValue: 20,
            maxValue: 50,
            color: getColor(25)
        },
        {
            minValue: 50,
            maxValue: 100,
            color: getColor(55)
        },
        {
            minValue: 100,
            maxValue: 200,
            color: getColor(105)
        },
        {
            minValue: 200,
            maxValue: 500,
            color: getColor(205)
        },
        {
            minValue: 500,
            maxValue: 1000,
            color: getColor(505)
        },
        {
            minValue: 1000,
            maxValue: 9999,
            color: getColor(5000)
        }
    ];
    return (
        <div className={'legend-wrapper'}>
            {
                listValueAndColorAqi.map((aqi) =>{
                    return (
                        <div key={aqi.color} className={'legend-item'}>
                            <div className={'legend-item-color'} style={{backgroundColor: aqi.color}}/>
                            <div className={'legend-item-value'}>
                                <p>AQI: {aqi.minValue} - {aqi.maxValue}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default MapLegend;
