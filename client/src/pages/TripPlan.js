import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import Gmaps from '../components/Gmaps/';
import API from '../utils/API';
import GoogleMap from 'google-distance-matrix';

class TripPlan extends Component {
  state = {
    origin: '',
    destination: '',
  }

  grabTravelValues = (id) => {

    API.getTrip(id)
      .then(res => {
        // console.log(res.data);
        this.setState({ origin: res.data.origin, destination: res.data.destination })
      })

  }

  componentDidMount() {

    const id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];

    this.grabTravelValues(id);

  }



  render() {
    return (
      <Container>
        <h1>Trip Plan Result Page</h1>
        <Gmaps
          inputOrigin={this.state.origin}
          inputDestination={this.state.destination}
        />
      </Container>
    );
  }
}

export default TripPlan;