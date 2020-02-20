// import external modules
import React, { Component } from "react";

import {
   Home,
   FileText,
   Activity,
   MessageSquare,
   ChevronRight,
   Map,
   Book,
   Box,
   LifeBuoy
} from "react-feather";
import { NavLink, withRouter } from "react-router-dom";
import SideMenu from "../sidemenuHelper";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules

class SideMenuContent extends Component {

   componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
         if(!(location.pathname.includes('/incident/')||location.pathname.includes('/suspect/'))){
            this.props.dispatch({ type: 'DASHBOARDRESET'});
         }
      });
    }
    
    componentWillUnmount() {
        this.unlisten();
    }

   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuMultiItems
               name="Dashboard"
               Icon={<Home size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/summary-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Month Dashboard</span>
               </NavLink>
               {/* <NavLink to="/stats-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Stats</span>
               </NavLink> */}
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/incidents" activeclassname="active">
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">Incidents</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/addresses" activeclassname="active">
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">Addresses</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/people" activeclassname="active">
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">People</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/weapons" activeclassname="active">
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">Weapons</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/gangs" activeclassname="active">
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">Gangs</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuMultiItems
               name="Reports"
               Icon={<FileText size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to={'/state-report/' + this.props.userData.agency} exact className="item" activeclassname="active">
                  <span className="menu-item-text">State Stats</span>
               </NavLink>
               <NavLink to="/trend-report" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Trend Report</span>
               </NavLink>
               <NavLink to="/sales-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Scheduled Reports</span>
               </NavLink>
               <NavLink to="/sales-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Saved Reports</span>
               </NavLink>
               <NavLink to="/sales-dashboard" exact className="item" activeclassname="active">
                  <span className="menu-item-text">New</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuMultiItems
               name="Admin"
               Icon={<Box size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <SideMenu toggleSidebarMenu={this.props.toggleSidebarMenu}>
                  <SideMenu.MenuMultiItems
                     name="Manage Reports"
                     ArrowRight={<ChevronRight size={16} />}
                     collapsedSidebar={this.props.collapsedSidebar}
                  >
                     <NavLink to="/pages/upload-file" exact className="item" activeclassname="active">
                        <span className="menu-item-text">Upload Spreadsheet</span>
                     </NavLink>
                     <NavLink to="/pages/run-state-report" exact className="item" activeclassname="active">
                        <span className="menu-item-text">Run State Report</span>
                     </NavLink>
                  </SideMenu.MenuMultiItems>
               </SideMenu>
               <NavLink to="/pages/manage-users" exact className="item" activeclassname="active">
                  <span className="menu-item-text">Manage Users</span>
               </NavLink>
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuSingleItem>
               <a
                  href="https://docs.apex-react.pixinvent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  activeclassname="active"
               >
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">Help</span>
               </a>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/graph" activeclassname="active">
                  <i className="menu-icon">
                     <Book size={18} />
                  </i>
                  <span className="menu-item-text">Graph</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            {/* <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/ai" activeclassname="active">
                  <i className="menu-icon">
                     <Activity size={18} />
                  </i>
                  <span className="menu-item-text">AI Lead Gen</span>
               </NavLink>
            </SideMenu.MenuSingleItem> */}
            {/* <SideMenu.MenuSingleItem>
               <NavLink to="/chat" activeClassName="active">
                  <i className="menu-icon">
                     <MessageSquare size={18} />
                  </i>
                  <span className="menu-item-text">Chat</span>
               </NavLink>
            </SideMenu.MenuSingleItem> */}
            {/* <SideMenu.MenuSingleItem>
               <NavLink to="/pages/change-log" activeclassname="active">
                  <i className="menu-icon">
                     <Map size={18} />
                  </i>
                  <span className="menu-item-text">Change Log</span>
               </NavLink>
            </SideMenu.MenuSingleItem> */}
            
            {/* <SideMenu.MenuSingleItem>
               <NavLink to="/pages/support" activeclassname="active">
                  <i className="menu-icon">
                     <LifeBuoy size={18} />
                  </i>
                  <span className="menu-item-text">Support</span>
               </NavLink>
            </SideMenu.MenuSingleItem> */}
         </SideMenu>
      );
   }
}

export default withRouter(SideMenuContent);
