import React from 'react';
import MapCompound from "./map-compound.component";
import "../../../../pages/map.page.css"
import "./compound.css"

// eslint-disable-next-line react/prop-types
function MapCompoundList({compounds}) {

    return (
        <div className="compounds-list">
            {/* eslint-disable-next-line react/prop-types */}
            {compounds.map(comp => (
                <MapCompound key={comp.id} chemical={comp.chemical} value={comp.value}/>
            ))}
        </div>
    );
}

export default MapCompoundList;
