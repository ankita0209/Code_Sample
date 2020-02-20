// import external modules
import { connect } from 'react-redux';
import React, { Component } from "react";
import SideMenuLO from "./sidemenu_lo";
import SideMenuLI from "./sidemenu_li";

class SideMenuContent extends Component {
   render() {
      const userData = this.props.userData;
      const { token } = userData;
      if ( token ) {
         return (
               <SideMenuLI {...this.props}/>
         );
      } else {
         return (
               <SideMenuLO {...this.props}/>
         );
      }
   }
}

const mapStateToProps = (state) => ({ 
   loggedIn : state.userStatus.loggedIn,
   userData : state.userStatus.userData 
});

export default connect(mapStateToProps)(SideMenuContent);
