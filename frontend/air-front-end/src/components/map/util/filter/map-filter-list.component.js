import React, {useState} from "react";
import "./map-filter.css";
import Form from "react-bootstrap/Form";

function MapFilterList() {
    const [switchState1, setSwitchState1] = useState(false);
    const [switchState2, setSwitchState2] = useState(false);
    const [switchState3, setSwitchState3] = useState(false);

    const handleChange=(e)=>{
        switch(e.target.id) {
            case "switch-1":
                setSwitchState1(!switchState1);
                break;
            case "switch-2":
                setSwitchState2(!switchState2);
                break;
            case "switch-3":
                setSwitchState3(!switchState3);
                break;
        }
    }

    return (
        <div className="map-filters custom-container d-flex flex-column justify-content-start align-items-center w-100 h-100 gap-2">
            <div className="map-filter-spacer-area">
                <div className="map-filter-spacer"></div>
            </div>
            <div className="filter-option d-flex justify-content-evenly align-items-center p-2">
                <p>Something 1</p>
                <Form.Switch
                    reverse
                    style={{marginLeft: "auto"}}
                    type="switch"
                    id="switch-1"
                    defaultChecked={switchState1}
                    onChange={handleChange}
                />
            </div>
            <div className="filter-option d-flex justify-content-evenly align-items-center p-2">
                <p>Something 2</p>
                <Form.Switch
                    reverse
                    style={{marginLeft: "auto"}}
                    type="switch"
                    id="switch-2"
                    defaultChecked={switchState2}
                    onChange={handleChange}
                />
            </div>
            <div className="filter-option d-flex justify-content-start align-items-center p-2">
                <p>Something 3</p>
                <Form.Switch
                    style={{marginLeft: "auto"}}
                    reverse
                    type="switch"
                    id="switch-3"
                    defaultChecked={switchState3}
                />
            </div>
        </div>
    );
}

export default MapFilterList;
