// import external modules
import React from "react";
import Router from "./router";

import Amplify from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure(config);

const App = props => <Router />;

export default App;
