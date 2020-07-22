import React, { Component } from 'react';
import io from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from './pages/Home';
import TripPlan from './pages/TripPlan';
import NoMatch from "./pages/NoMatch";
import Notification from "./components/Notification";

import './App.css';


class App extends Component {

  state = {
    userId: '1', // This Id is temp
    allTrips: [],
    socketData: ''
  }

  socketURL =
    process.env.NODE_ENV === 'production'
      ? window.location.hostname
      : 'http://localhost:3001';

  socket = io.connect(this.socketURL, { secure: true });

  componentDidMount() {
    // this.socket.on("outgoing data", data => {
    //   this.setState({socketData: data})
    // })

    this.socket.on("incoming data", data => {
      this.setState({socketData: data})

      console.log('A trip is saved!');
      console.log(data);
      console.log(`Trip Name: ${data.tripData.tripName}`);
      console.log(`Destination: ${data.tripData.destination}`);
    })
  }

  loadTrips = () => {
    const userId = this.state.userId;
    API.getAllTripsByUser(userId)
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
              render={props => <Home {...props}
                userId={this.state.userId}
                loadTrips={this.loadTrips}
                allTrips={this.state.allTrips}
                socket={this.socket} />}
            />

            <Route
              exact
              path="/trip-plans"
              component={TripPlan}
            />

            <Route
              exact
              path="/trip-plans/:id"
              render={() => <TripPlan allTrips={this.state.allTrips} />}
            />

            <Route component={NoMatch} />
          </Switch>
          <Notification socketData={this.state.socketData} />
        </>
      </Router>
    )
  }
}

export default App;
