import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import Gmaps from '../components/Gmaps/';

class TripPlan extends Component {
  render() {
    return (
      <Container>
        <h1>Trip Plan Result Page</h1>
        <p>
          Put Trip Plan result here.
        </p>
        <Gmaps />
      </Container>
    );
  }
}

export default TripPlan;