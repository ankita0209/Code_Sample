// import external modules
import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    Nav,
} from "reactstrap";
//import PerfectScrollbar from "react-perfect-scrollbar";
import {
    Menu,
    MoreVertical,
} from "react-feather";
import NoUserNav from "./nouserNav";

class ThemeNavbar extends Component {
    
    handleClick = e => {
        this.props.toggleSidebarMenu("open");
    };

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            redirectHome: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
                <div className="container-fluid px-0">
                    <div className="navbar-header">
                        <Menu
                            size={14}
                            className="navbar-toggle d-lg-none float-left"
                            onClick={this.handleClick.bind(this)}
                            data-toggle="collapse"
                        />
                        <MoreVertical
                            className="mt-1 navbar-toggler black no-border float-right"
                            size={50}
                            onClick={this.toggle}
                        />
                    </div>
                    <div className="navbar-container">
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto float-right" navbar>
                                <NoUserNav />
                            </Nav>
                        </Collapse>
                    </div>
                </div>
            </Navbar>
        );
    }
}

export default ThemeNavbar;