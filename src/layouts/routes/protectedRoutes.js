// import external modules
import React from "react";
import { Route, Redirect } from "react-router-dom";
// import internal(own) modules
import MainLayout from "../mainLayout";
import { connect } from 'react-redux';

const ProtectedLayoutRoute = ({ render, ...rest }) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    rest.dispatch({ type: 'LOGIN', userData });
    return (
      <Route
         {...rest}
         render={matchProps => 
            userData && userData.token ? (
            <MainLayout>{render(matchProps)}</MainLayout>
         ) : (
             <Redirect to="/pages/login" />
         )}
      />
   );
};

const mapStateToProps = (state) => ({ 
    loggedIn : state.userStatus.loggedIn,
 });

export default connect(mapStateToProps)(ProtectedLayoutRoute);

//export default MainLayoutRoute;
