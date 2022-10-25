import React from "react";
import "./switch.component.css";

// eslint-disable-next-line react/prop-types
const Switch = ({id, isOn, handleToggle, onColor}) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={id}
                type="checkbox"
            />
            <label
                style={{ background: isOn && onColor }}
                className="react-switch-label"
                htmlFor={id}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    );
}
export default Switch;
