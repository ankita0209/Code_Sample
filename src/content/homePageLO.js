// import external modules
import React, { Component, Fragment } from "react";
import ContentHeader from "../components/contentHead/contentHeader";
import ContentSubHeader from "../components/contentHead/contentSubHeader";

class homePage extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Home Page</ContentHeader>
            <ContentSubHeader>A page for non-logged in users to tell them what Securacity is about</ContentSubHeader>
         </Fragment>
      );
   }
}

export default homePage;
