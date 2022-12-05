import React, {useState} from "react";
import "./map-filter.css";
import Switch from "../../../controls/switch.component";

function MapFilterList() {
    const [switchState1, setSwitchState1] = useState(false);
    const [switchState2, setSwitchState2] = useState(false);
    const [switchState3, setSwitchState3] = useState(false);

    return (
        <div className="map-filters custom-container d-flex flex-column justify-content-start align-items-center w-100 h-100 gap-2">
            <div className="map-filter-spacer-area">
                <div className="map-filter-spacer"></div>
            </div>
            <div className="filter-option d-flex justify-content-evenly align-items-center p-2">
                <p>Placeholder filter 1</p>
                <Switch isOn={switchState1}
                        id={"switch1"}
                        handleToggle={() => setSwitchState1(!switchState1)}
                        onColor={"#9116F9"}
                        style={{marginLeft: "auto"}}/>
            </div>
            <div className="filter-option d-flex justify-content-evenly align-items-center p-2">
                <p>Placeholder filter 2</p>
                <Switch isOn={switchState2}
                        id={"switch2"}
                        handleToggle={() => setSwitchState2(!switchState2)}
                        onColor={"#9116F9"}
                        style={{marginLeft: "auto"}}/>
            </div>
            <div className="filter-option d-flex justify-content-evenly align-items-center p-2">
                <p>Placeholder filter 3</p>
                <Switch isOn={switchState3}
                        id={"switch3"}
                        handleToggle={() => setSwitchState3(!switchState3)}
                        onColor={"#9116F9"}
                        style={{marginLeft: "auto"}}/>
            </div>
        </div>
    );
}

export default MapFilterList;
