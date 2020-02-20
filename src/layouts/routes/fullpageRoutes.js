// import external modules
import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from 'react-router'

// import internal(own) modules
import FullPageLayout from "../fullpageLayout";

const FullPageLayoutRoute = ({ render, ...rest }) => {
   return (
      <Route
         {...rest}
         render={matchProps => {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const { token } = userData || {};
            if (token) {
               return <Redirect to="/summary-dashboard" />
            } else {
               return <FullPageLayout>
                  {render(matchProps)}
               </FullPageLayout>;
            }
         }}
      />
   );
};

export default FullPageLayoutRoute;