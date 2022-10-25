import React from 'react';
import './side-navigation.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import {Link} from "react-router-dom";

function SideNavigation() {
    return (
        <div className={"d-flex flex-column gap-5 w-100 h-100 pt-3"}>
            <Link to={"/map"}>
                <div className={"btn-side-nav d-flex justify-content-center align-items-center highlight"}>
                    <FontAwesomeIcon icon={faMapLocationDot} size="2x" />
                </div>
            </Link>
            <Link to={"/metrics"}>
                <div className={"btn-side-nav d-flex justify-content-center align-items-center highlight"}>
                    <FontAwesomeIcon icon={faChartSimple} size="2x"/>
                </div>
            </Link>
            <Link to={"/recommend"}>
                <div className={"btn-side-nav d-flex justify-content-center align-items-center highlight"}>
                    <FontAwesomeIcon icon={faLightbulb} size="2x"/>
                </div>
            </Link>
        </div>
    );
}

export default SideNavigation;
