import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import Gmaps from '../components/Gmaps/';
import API from '../utils/API';


class TripPlan extends Component {
  state = {
    origin: '',
    destination: '',
    // stopOne: '',
    // stopTwo: '',
    // stopThree: ''
    stops: []
  }

  grabTravelValues = (id) => {

    API.getTrip(id)
      .then(res => {
        // console.log(res.data);
        // console.log(res.data.stops.placesOfStops);

        this.setState({ origin: res.data.origin, 
          destination: res.data.destination, 
          stops: res.data.stops.placesOfStops });
          // console.log('STOPS: ' + res.data.stops.placesOfStops[0])
          // for(let i = 0; i < res.data.stops.placesOfStops.length; i++){
          //   this.setState({ stops: res.data.stops.placesOfStops[i] });
          //   // console.log('STOPS!: ' + res.data.stops.placesOfStops[i])
          // }

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
          stops={this.state.stops}
          // stopOne={this.state.stops.length ? this.state.stops[0]: null}
          // stopTwo={this.state.stops.length > 1 ? this.state.stops[1]: null}
          // stopThree={this.state.stops.length > 2 ? this.state.stops[2]: null}
        />
      </Container>
    );
  }
}

export default TripPlan;