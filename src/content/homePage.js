// import external modules
import React, { Component } from "react";
import { Redirect } from 'react-router'
import HomePageLO from './homePageLO';

class HomePage extends Component {
   constructor(props) {
      super(props);
  }
   buildHomePage = () => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const { token } = userData || {};
      if (token) {
         return <Redirect to="/summary-dashboard"/> 
       } else {
          return (<HomePageLO {...this.props}/>);
       }
   }

   render() {
      return (
         <div>
            { this.buildHomePage() }
         </div>
      )
   }
}


export default HomePage;
