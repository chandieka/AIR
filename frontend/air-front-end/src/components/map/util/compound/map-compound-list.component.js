import React from 'react';
import MapCompound from "./map-compound.component";

// eslint-disable-next-line react/prop-types
function MapCompoundList({compounds}) {

    return (
        <div className="compounds-list w-100 h-100 d-flex justify-content-around gap-5 align-items-center flex-wrap">
            {/* eslint-disable-next-line react/prop-types */}
            {compounds.map(comp => (
                <MapCompound key={comp.id} chemical={comp.chemical} value={comp.value}/>
            ))}
        </div>
    );
}

export default MapCompoundList;
