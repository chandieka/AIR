import React, { useRef } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import PropTypes from 'prop-types';
import boundaries from '../../../resources/data/eindhoven-area-boundaries.json';

function getColor(aqi) {
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

function Boundaries({infoUpdate}) {
    const map = useMap()
    const geoJsonRef = useRef()

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: () => {
                layer.setStyle({
                    weight: 5,
                    color: 'black',
                    fillOpacity: 0.5
                });

                layer.bringToFront();

                infoUpdate();
            },
            mouseout: (e) => {
                geoJsonRef.current.resetStyle(e.target);
            },
            click: () => {
                map.fitBounds(layer.getBounds());
            }
        });
    }

    return (
        <GeoJSON
            style={areaStyle}
            data={boundaries.features}
            onEachFeature={onEachFeature}
            ref={geoJsonRef}
        />
    );
}


Boundaries.propTypes = {
    infoUpdate: PropTypes.object
};


export default Boundaries;