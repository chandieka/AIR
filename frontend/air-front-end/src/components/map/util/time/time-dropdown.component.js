import React from 'react';
import "./time-dropdown.component.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {faCalendarDays, faAngleDown, faRotateRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TimeDropdown() {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className={"select-options-wrapper"}>
                    <div className={"select-quick"}>
                        <p className={"select-subtitle"}>Quick select</p>
                        <div className={"select-quick-options"}>

                        </div>
                    </div>
                    <div className={"select-common"}>
                        <p className={"select-subtitle"}>Commonly used</p>
                    </div>
                    <div className={"select-refresh-interval"}>

                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    const TimePopOver = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <div className={"btn-time highlight time-element"}>
                <FontAwesomeIcon icon={faCalendarDays} size="xl"/>
                <FontAwesomeIcon icon={faAngleDown} size="lg"/>
            </div>
        </OverlayTrigger>
    );
    return (
        <div className="time-dropdown-wrapper">
            <TimePopOver/>
            <div className={"selected-time time-element"}>
                <p> 10 hours ago</p>
            </div>
            <div className={"time-refresh-interval time-element"}>
                <FontAwesomeIcon icon={faRotateRight} size="lg"/>
                <p>5m</p>
            </div>
        </div>
    );
}

export default TimeDropdown;
