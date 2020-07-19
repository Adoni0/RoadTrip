import React, { Component } from 'react';
import io from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from './pages/Home';
import TripPlan from './pages/TripPlan';
import Login from './pages/Login';
import NoMatch from "./pages/NoMatch";

import './App.css';


class App extends Component {

  state = {
    userId: '1', // This Id is temp
    allTrips: []
  }

  handleSetState(userID){
    //userId = userID;
  socketURL =
    process.env.NODE_ENV === 'production'
      ? window.location.hostname
      : 'http://localhost:3001';

  socket = io.connect(this.socketURL, {secure: true});
  }

  componentDidMount() {
    this.socket.on("outgoing data", data => {
      // this.setState({response: data})
      // console.log( `The book "${this.state.response.title}" has been saved!` );

      console.log('A trip is saved!');
      console.log(data);
      console.log(`Trip Name: ${data.tripName}`);
      console.log(`destination: ${data.destination}`);
    })
  }

  loadTrips = () => {
    const userId = this.state.userId;
    API.getAllTrips(userId)
      .then(res => {
        console.log(res.data);
        this.setState({ allTrips: res.data.trips });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route
              exact
              path="/"
              component={Login}/>
            
            <Route exact path="/trip-plans" component={TripPlan} />
            <Route exact path="/trip-plans/:id" component={TripPlan} />
            <Route exact path="/home" render={props => 
              <Home {...props} userId={this.state.userId} loadTrips={this.loadTrips} allTrips={this.state.allTrips} />}/>
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
