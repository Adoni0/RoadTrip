import React, { Component } from 'react';
import io from "socket.io-client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from './pages/Home';
import TripPlans from './pages/TripPlans';
import TripPlan from './pages/TripPlan';
import Login from './pages/Login';
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Notification from "./components/Notification";

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      userId: localStorage.getItem('user'), // This Id is temp
      allTrips: [],
      socketData: ''
    }
  }
  // state = {
  //   userId: null, // This Id is temp
  //   allTrips: [],
  //   socketData: ''
  // }

  socketURL =
    process.env.NODE_ENV === 'production'
      ? window.location.hostname
      : 'http://localhost:3001';

  socket = io.connect(this.socketURL, {secure: true});

  updateUser = (userId) => {
    this.setState({
      userId: userId
    });
  };

  componentDidMount() {
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
          <Nav />
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
              render={props => <TripPlans {...props}
                userId={this.state.userId}
                loadTrips={this.loadTrips}
                allTrips={this.state.allTrips}
              />}
            />

            <Route
              exact
              path="/login"
              render={() => {
                return <Login updateUser={this.updateUser} />
              }}
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
