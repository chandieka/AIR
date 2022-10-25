import React from 'react';
import MapSlider from "../components/map/util/time/map-slider.component";
import MapButtons from "../components/map/util/time/map-buttons.component";
import Map from "../components/map/map.component";
import MapFilterList from "../components/map/util/filter/map-filter-list.component";
import MapCompoundList from "../components/map/util/compound/map-compound-list.component";
import "./map.page.css";

export default function MapPage() {
    const staticDataCompound = [
        {
            id: 1,
            chemical: 'N02',
            value: '20',
        },
        {
            id: 2,
            chemical: '02',
            value: '33',
        },
        {
            id: 3,
            chemical: '03',
            value: '15',
        },
        {
            id: 4,
            chemical: 'PM',
            value: '10',
        }
    ];

    return (
        <div className="map-layout">
            <MapSlider/>
            <MapButtons/>
            <Map/>
            <MapFilterList/>
            <MapCompoundList compounds={staticDataCompound}/>
        </div>
    );
}
