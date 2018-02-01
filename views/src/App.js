import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {
  Home, 
  About,
  Dashboard
} from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/dashboard" component = {Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;