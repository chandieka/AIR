import React from 'react';
import PropTypes from 'prop-types';
import MapSearch from "./util/map-search.component";
import "./map.css";
import {MapContainer, GeoJSON, TileLayer, Marker} from 'react-leaflet'
import boundaries from '../../resources/data/eindhoven-area-boundaries.json'

function Map({config}) {

    const mapLayerStyle = {
        fillColor: "red",
        fillOpacity: 0.8,
        weight: 2,
        color: "white",
    }

    return (
        <div className="map custom-container d-flex justify-content-start align-items-center flex-column w-100 h-100 gap-2">
            <MapContainer center={config.coordinate} zoom={config.zoom} scrollWheelZoom={config.scroll} className="map-container">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={config.coordinate} />
                <GeoJSON
                    style={mapLayerStyle}
                    data={boundaries.features}
                />
            </MapContainer>
            <div className="d-flex justify-content-center align-items-center w-100 h-auto gap-1">
                <div style={{background: "gray", width: "25%", height: "100%"}}/>
                <MapSearch/>
            </div>
        </div>
    );
}

Map.propTypes = {
    config: PropTypes.object
};

export default Map;
