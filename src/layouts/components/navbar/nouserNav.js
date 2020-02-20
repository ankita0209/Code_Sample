import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    UncontrolledDropdown
} from "reactstrap";
import {
    LogIn
} from "react-feather";

class NoUserNav extends Component {
    render() {   
        return (
            <UncontrolledDropdown nav inNavbar className="pr-1">
                    <Link to="/pages/login" className="p-0">
                            <LogIn size={16} className="mr-1" /><span style={{color:'white'}}> Login</span>
                    </Link>
            </UncontrolledDropdown>
        )
    }
}

export default NoUserNav;