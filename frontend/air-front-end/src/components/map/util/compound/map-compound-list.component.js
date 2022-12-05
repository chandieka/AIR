import React from 'react';
import MapCompound from "./map-compound.component";
import "../../../../pages/map.page.css"

// eslint-disable-next-line react/prop-types
function MapCompoundList({compounds}) {

    return (
        <div className="compounds-list d-flex gap-5 flex-wrap justify-content-center">
            {/* eslint-disable-next-line react/prop-types */}
            {compounds.map(comp => (
                <MapCompound key={comp.id} chemical={comp.chemical} value={comp.value}/>
            ))}
        </div>
    );
}

export default MapCompoundList;
