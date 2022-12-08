import React from "react";
import "./map-slider.css";

function MapSlider() {
    return (
        <div className="time-slider custom-container w-100 h-100 d-flex flex-column">
            <div className="slider">
                <div className={'slider-line'}>
                    <div className={'bar'}/>
                    <div className={'tick first'}/>
                    <div className={'tick between'}/>
                    <div className={'tick between'}/>
                    <div className={'tick between'}/>
                    <div className={'tick between'}/>
                    <div className={'tick between'}/>
                    <div className={'tick between'}/>
                    <div className={'tick between'}/>
                    <div className={'tick last'}/>
                </div>
            </div>
            <div className="slider-dates">
                <p>Date 1</p>
                <p style={{marginLeft: "auto"}}>Date 2</p>
            </div>
        </div>
    );
}

export default MapSlider;
