import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import {
    User,
    Inbox,
    LogOut
} from "react-feather";

class UserNav extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        const username = (typeof this.props.user === 'object') ? this.props.user.username : '';
        this.state = {
            isLoggedIn: this.props.loggedIn,
            username: username
        }
    }

    render() {
        console.log('rendering userNav');
        const username = this.state.username;
        return (
            <UncontrolledDropdown nav inNavbar className="pr-1">
                <DropdownToggle nav>
                    <img src={userImage} alt="logged-in-user" className="rounded-circle width-35" />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <span className="font-small-3">
                            {username}
                        </span>
                    </DropdownItem>
                    <DropdownItem divider />

                    <Link to="/pages/user-profile" className="p-0">
                        <DropdownItem>
                            <User size={16} className="mr-1" /> My Profile
                        </DropdownItem>
                    </Link>
                    <Link to="/email" user={username} className="p-0">
                        <DropdownItem>
                            <Inbox size={16} className="mr-1" /> Email
                                 </DropdownItem>
                    </Link>
                    <Link to="/pages/logout" onClick={() => localStorage.clear() } className="p-0">
                        <DropdownItem>
                            <LogOut size={16} className="mr-1" /><span style={{ color: 'white' }}> Logout</span>
                        </DropdownItem>
                    </Link>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.userStatus.loggedIn,
    user: state.userStatus.user
});

export default connect(mapStateToProps)(UserNav);