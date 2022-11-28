import { useRef } from 'react';
import React from "react";
import "./map.css";
import PropTypes from 'prop-types';
import MapSearch from "./util/map-search.component";
import MapControl from "./util/control/map-control.component";
import Details from './control/details.component'
import Boundaries from './data-layers/boundaries.component'
import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet';
import L from 'leaflet';


function Map({ config }) {
    const value = useRef(0);
    const info = useRef(L.control());
    const mapRef = useRef();

    function infoUpdate() {
        value.current += 1;
        info.current.update()
    }

    return (
        <div className="map custom-container d-flex justify-content-start align-items-center flex-column w-100 h-100 gap-2">
            <MapContainer 
                center={config.coordinate} 
                zoom={config.zoom} 
                scrollWheelZoom={config.scroll} 
                className="map-container"
                ref={mapRef}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Boundaries infoUpdate={infoUpdate} />
                <ScaleControl/>
                <Details info={info} value={value}/> 
            </MapContainer>
            <div className="d-flex justify-content-center align-items-center w-100 h-auto gap-1">
                <div style={{background: "gray", width: "25%", height: "100%"}}/>
                <MapControl 
                    coordinate={config.coordinate} 
                    zoom={config.zoom} 
                    map={mapRef} 
                />
                <MapSearch/>
            </div>
        </div>
    );
}

Map.propTypes = {
    config: PropTypes.object
};

export default Map;
