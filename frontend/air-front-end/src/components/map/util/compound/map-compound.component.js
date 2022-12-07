import React from 'react';
import "./compound.css";

// eslint-disable-next-line react/prop-types
function MapCompound({chemical, value}) {
    return (
        <div className="compound-item custom-container">
            <p className={"compound-title"}>{chemical}</p>
            <p className={"compound-value"} style={{textAlign: "center", fontWeight: "bold"}}>{value}</p>
        </div>
    );
}

export default MapCompound;
