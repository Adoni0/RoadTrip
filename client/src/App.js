import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import TripPlan from './pages/TripPlan';
import NoMatch from "./pages/NoMatch";


import './App.css';

class App extends Component {

  state = {
    userId: '1' // This Id is temp
  }

  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} userId={this.state.userId} />}
            />
            <Route exact path="/trip-plans" component={TripPlan} />
            <Route exact path="/trip-plans/:id" component={TripPlan} />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
