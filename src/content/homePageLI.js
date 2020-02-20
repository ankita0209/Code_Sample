// import external modules
import React, { Component, Fragment } from "react";
import ContentHeader from "../components/contentHead/contentHeader";
import ContentSubHeader from "../components/contentHead/contentSubHeader";

class homePage extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Home Page LI</ContentHeader>
            <ContentSubHeader>This would be the default dashboard for logged in users</ContentSubHeader>
         </Fragment>
      );
   }
}

export default homePage;
