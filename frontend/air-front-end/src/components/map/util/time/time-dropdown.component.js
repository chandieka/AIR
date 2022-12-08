import React, { useState} from 'react';
import "./time-dropdown.component.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {faCalendarDays, faAngleDown, faRotateRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Form from 'react-bootstrap/Form';
import Switch from "../../../controls/switch.component";


function TimeDropdown() {
    const [switchState, setSwitchState] = useState(false);
    const [refreshTimeState, setRefreshTimeState] = useState("5");
    const [refreshTimeTypeState, setRefreshTimeTypeState] = useState("m");
    const popover = (
        <Popover id="popover-basic-1">
            <Popover.Body>
                <div className={"select-options-wrapper"}>
                    <div className={"select-quick"}>
                        <p className={"select-subtitle"}>Quick select</p>
                        <div className={"select-quick-options"}>
                            <Form.Select aria-label="time-select"
                                         size={"sm"}
                                         className={'input-select'}>
                                <option value="next">Next</option>
                                <option value="past">Past</option>
                            </Form.Select>
                            <Form.Control size="sm"
                                          type="text"
                                          placeholder="nr"
                                          className={'input-nr'}
                                          style={{maxWidth: '40px'}}/>
                            <Form.Select aria-label="time-select-2"
                                         size={"sm"}
                                         className={'input-select'}>
                                <option value="h">Hours</option>
                                <option value="d">Days</option>
                                <option value="w">Weeks</option>
                            </Form.Select>
                            <div className={'custom-btn custom-time-btn'}>Apply</div>
                        </div>
                    </div>
                    <div className={"select-common"}>
                        <p className={"select-subtitle"}>Commonly used</p>
                        <div className={'select-common-options'}>
                            <p>Today</p>
                            <p>This week</p>
                            <p>Last 15 minutes</p>
                            <p>Last 30 minutes</p>
                            <p>Last 1 hour</p>
                            <p>Last 24 hours</p>
                            <p>Last 7 days</p>
                            <p>Last 30 days</p>
                            <p>Last 90 days</p>
                            <p>Last 1 year</p>
                        </div>
                    </div>
                    <div className={"select-refresh-interval"}>
                        <Switch isOn={switchState}
                                id={"switch-time"}
                                handleToggle={() => {setSwitchState(!switchState)}}
                                onColor={"#9116F9"}/>
                        <p>Refresh every</p>
                        <Form.Control size="sm"
                                      type="text"
                                      placeholder="nr"
                                      className={'input-nr'}
                                      onBlur={(event) =>{
                                          setRefreshTimeState(event.target.value);
                        }}/>
                        <Form.Select aria-label="time-select-3"
                                     size={"sm"}
                                     className={'input-select'}
                                     style={{marginLeft: 'auto'}}
                                     onChange={(event)=>{
                                         setRefreshTimeTypeState(event.target.value);
                        }}>
                            <option value="min">Minutes</option>
                            <option value="h">Hours</option>
                        </Form.Select>
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
                <p>{refreshTimeState}{refreshTimeTypeState}</p>
            </div>
        </div>
    );
}

export default TimeDropdown;
