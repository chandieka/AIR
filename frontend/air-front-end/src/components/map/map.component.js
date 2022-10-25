import React from 'react';
import MapSearch from "./util/map-search.component";
import "./map.css";

function Map() {
    return (
        <div className="map custom-container d-flex justify-content-start align-items-center flex-column w-100 h-100 gap-2">
            <div className="map-container"></div>
            <div className="d-flex justify-content-center align-items-center w-100 h-auto gap-1">
                <div style={{background: "gray", width: "25%", height: "100%"}}/>
                <MapSearch/>
            </div>
        </div>
    );
}

export default Map;
