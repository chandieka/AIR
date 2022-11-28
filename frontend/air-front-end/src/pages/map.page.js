import React from 'react';
import MapSlider from "../components/map/util/time/map-slider.component";
import MapButtons from "../components/map/util/time/map-buttons.component";
import Map from "../components/map/map.component";
import MapFilterList from "../components/map/util/filter/map-filter-list.component";
import MapCompoundList from "../components/map/util/compound/map-compound-list.component";
import "./map.page.css";
import TimeDropdown from "../components/map/util/time/time-dropdown.component";

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

    const config = {
        coordinate: [51.44060077234845, 5.477458715209605],
        zoom: 12,
        scroll: true,
    }
    return (
        <div className="map-layout">
            <MapSlider/>
            <MapButtons/>
            <Map config={config}/>
            <MapFilterList/>
            <MapCompoundList compounds={staticDataCompound}/>
            <TimeDropdown/>
        </div>
    );
}
