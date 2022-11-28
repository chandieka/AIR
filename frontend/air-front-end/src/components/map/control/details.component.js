import { useEffect } from "react";
import L from 'leaflet';
import { useMap } from "react-leaflet";
import PropTypes from 'prop-types';

function Details({value, info}) {
    const map = useMap();
    
    useEffect(() => {
        info.current.update = function () {
            this._div.innerHTML = `
                <h4>Area Information</h4>
                <p>Something: ${value.current}</p>
                <p>Something: ${value.current}</p>
                <p>Something: ${value.current}</p>
                <p>Something: ${value.current}</p>
                <p>Something: ${value.current}</p>
            `;
            console.log("Hit!");
        };
        info.current.onAdd = function () {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            info.current.update()
            return this._div;
        };

        info.current.addTo(map);
    }, [map])
    
    // setTimeout(() => {
    //     setInterval(() => {
    //         setTemp(temp + 1)
    //         console.log(temp);
    //     }, 1000);
    // }, 1000);

    return null;
}

Details.propTypes = {
    value: PropTypes.object,
    info: PropTypes.object
};

export default Details;