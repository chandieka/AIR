import React from "react";
import Form from 'react-bootstrap/Form';
import "./map-search.css";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MapSearch() {
    return (
        <div className="map-search-container">
            <Form.Control type="text" placeholder="Search by Zipcode..." />
            <div className="custom-btn">
                <FontAwesomeIcon icon={faSearch} size="lg"/>
            </div>
        </div>
    );
}

export default MapSearch;
