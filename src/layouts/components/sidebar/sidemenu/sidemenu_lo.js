// import external modules
import React, { Component } from "react";

import {
   Home,
   Mail,
   HelpCircle,
   CreditCard,
   Film,
   Map,
   Book,
   LifeBuoy
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/user-profile" activeclassname="active">
                  <i className="menu-icon">
                     <Home size={18} />
                  </i>
                  <span className="menu-item-text">About</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/horizontal-timeline" activeclassname="active">
                  <i className="menu-icon">
                     <Mail size={18} />
                  </i>
                  <span className="menu-item-text">Contact Us</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>            
               <NavLink to="/pages/faq" activeclassname="active">
                  <i className="menu-icon">
                     <HelpCircle size={18} />
                  </i>
                  <span className="menu-item-text">FAQ</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/knowledge-base" activeclassname="active">
                  <i className="menu-icon">
                     <Film size={18} />
                  </i>
                  <span className="menu-item-text">Demo</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/gallery" activeclassname="active">
                  <i className="menu-icon">
                     <CreditCard size={18} />
                  </i>
                  <span className="menu-item-text">Purchase</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/pages/change-log" activeclassname="active">
                  <i className="menu-icon">
                     <Map size={18} />
                  </i>
                  <span className="menu-item-text">Change Log</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
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
               <a href="https://pixinvent.ticksy.com" target="_blank" rel="noopener noreferrer" activeclassname="active">
                  <i className="menu-icon">
                     <LifeBuoy size={18} />
                  </i>
                  <span className="menu-item-text">Support</span>
               </a>
            </SideMenu.MenuSingleItem>
         </SideMenu>
      );
   }
}

export default SideMenuContent;
