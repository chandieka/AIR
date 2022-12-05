import React from 'react';
import './side-navigation.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";

function SideNavigation() {
    return (
        <div className={"d-flex flex-column gap-5 w-100 h-100 pt-3"}>
            <NavLink to={"/map"}>
                <div className={"btn-side-nav d-flex justify-content-center align-items-center jump"}>
                    <FontAwesomeIcon className="highlight" icon={faMapLocationDot} size="2x" />
                </div>
            </NavLink>
            <NavLink to={"/metrics"} >
                <div className={"btn-side-nav d-flex justify-content-center align-items-center jump"}>
                    <FontAwesomeIcon className="highlight" icon={faChartSimple} size="2x"/>
                </div>
            </NavLink>
        </div>
    );
}

export default SideNavigation;
