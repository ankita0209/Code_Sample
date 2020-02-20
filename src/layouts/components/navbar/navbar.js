// import external modules
import { connect } from 'react-redux';
import React, { Component } from "react";
import NavBarLO from "./navbar_lo";
import NavBarLI from "./navbar_li";

class ThemeNavbar extends Component {
   render() {
      const userData = this.props.userData;
      const { token } = userData;
      if ( token ) {
         return (
               <NavBarLI {...this.props}/>
         );
      } else {
         return (
               <NavBarLO {...this.props}/>
         );
      }
   }
}

const mapStateToProps = (state) => ({ 
   loggedIn : state.userStatus.loggedIn,
   userData : state.userStatus.userData 
});

export default connect(mapStateToProps)(ThemeNavbar);
