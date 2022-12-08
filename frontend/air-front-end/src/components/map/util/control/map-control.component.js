import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './control.css';

function MapControl({ coordinate, zoom, map }){

    const clickEvent = useCallback(() => {
        map.current.setView(coordinate, zoom);
    }, [map])

    return (
        <div className="control-container d-flex align-items-center">
            <div className='control d-flex justify-content-center align-items-center' onClick={clickEvent}>
                <FontAwesomeIcon icon={faRotateRight} size="lg"/>
            </div>
            <div className='control d-flex justify-content-center align-items-center' onClick={clickEvent}>
                <FontAwesomeIcon icon={faRotateRight} size="lg" />
            </div>
            <div className='control d-flex justify-content-center align-items-center' onClick={clickEvent}>
                <FontAwesomeIcon icon={faRotateRight} size="lg" />
            </div>
        </div>
    );  
}

MapControl.propTypes = {
    coordinate: PropTypes.array,
    zoom: PropTypes.number,
    map: PropTypes.object
};

export default MapControl;