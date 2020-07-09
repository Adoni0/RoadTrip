import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import TripPlan from './pages/TripPlan';
import NoMatch from "./pages/NoMatch";


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trip-plan" component={TripPlan} />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
