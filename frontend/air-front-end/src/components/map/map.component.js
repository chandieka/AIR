import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MapSearch from "./util/map-search.component";
import MapControl from "./util/control/map-control.component"
import "./map.css";
import { MapContainer, GeoJSON, TileLayer, Marker, ScaleControl } from 'react-leaflet'
import boundaries from '../../resources/data/eindhoven-area-boundaries.json'


function Map({config}) {
    const geoJsonRef = useRef();
    const mapRef = useRef();
    // const [origin, setOrigin] = useState()

    function getColor (aqi) {
        return aqi > 1000 ? '#800026' :
                aqi > 500 ? '#BD0026' :
                aqi > 200 ? '#E31A1C' :
                aqi > 100 ? '#FC4E2A' :
                aqi > 50 ? '#FD8D3C' :
                aqi > 20 ? '#FEB24C' :
                aqi > 10 ? '#FED976' :
                '#FFEDA0';
    }
    
    function areaStyle() {
        return {
            fillColor: getColor(Math.floor(Math.random() * 1000)),
            fillOpacity: 0.8,
            weight: 2,
            color: "white",
        }
    }
    
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: () => {
                layer.setStyle({
                    weight: 5,
                    color: 'black',
                    fillOpacity: 0.5
                });
    
                layer.bringToFront();
            },
            mouseout: (e) => {
                geoJsonRef.current.resetStyle(e.target);
            },
            click: () => {
                mapRef.current.fitBounds(layer.getBounds());
            }
        });
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
                <Marker position={config.coordinate} />
                <GeoJSON
                    style={areaStyle}
                    data={boundaries.features}
                    onEachFeature={onEachFeature}
                    ref={geoJsonRef}
                />
                <ScaleControl/>
            </MapContainer>
            <div className="d-flex justify-content-center align-items-center w-100 h-auto gap-1">
                <div style={{background: "gray", width: "25%", height: "100%"}}/>
                <MapControl coordinate={config.coordinate} zoom={config.zoom} map={mapRef}/>
                <MapSearch/>
            </div>
        </div>
    );
}

Map.propTypes = {
    config: PropTypes.object
};

export default Map;
