import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.png';
import {Link} from "react-router-dom";

function TopNavigation() {
    return (
            <Navbar style={{paddingLeft: "10px", height: 45, backgroundColor: "#264653"}} fixed="top" variant="dark">
                <Navbar.Brand>
                    <Link to={"/"}>
                        <img style={{width: 40, height: 40}}
                             alt="AirLogo"
                             src={logo}
                             className="d-inline-block align-top"
                        />
                    </Link>
                </Navbar.Brand>
            </Navbar>
    );
}

export default TopNavigation;
