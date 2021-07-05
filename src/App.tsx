

import { HashRouter as Router, Route,Redirect} from 'react-router-dom'
import RouteConfig from './router/index'
import Login from "./view/login/index"
import React from 'react';
function App() {
  return (
    <Router>
    <Route path="/home"   component={RouteConfig}></Route>
    <Route path="/login"  component={Login}></Route>
    <Redirect to="/home" from="/"></Redirect>
  </Router>
  );
}
export default App;
