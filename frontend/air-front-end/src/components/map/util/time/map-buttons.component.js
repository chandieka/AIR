import React from 'react';
import {faBackward} from "@fortawesome/free-solid-svg-icons";
import {faForward} from "@fortawesome/free-solid-svg-icons";
import {faPause} from "@fortawesome/free-solid-svg-icons";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MapButtons() {
    return (
        <div className="time-btns custom-container d-flex justify-content-between align-items-center w-100 h-100">
            <FontAwesomeIcon className="highlight jump" icon={faBackward} size="2x"/>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <FontAwesomeIcon className="highlight jump" icon={faPause} size="2x"/>
                <FontAwesomeIcon className="highlight jump" icon={faPlay} size="2x"/>
            </div>
            <FontAwesomeIcon className="highlight jump" icon={faForward} size="2x"/>
        </div>
    );
}

export default MapButtons;
