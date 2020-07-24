import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import Gmaps from '../components/Gmaps/';
import API from '../utils/API';
import YelpBusinesses from '../components/Yelp/YelpBusinesses';
import Car from "../components/Car";


class TripPlan extends Component {

  state = {
    tripName: '',
    origin: '',
    destination: '',
    stops: [],
    budget: ''
  }

  grabTravelValues = (id) => {

    API.getTrip(id)
      .then(res => {

        this.setState({
          tripName: res.data.tripName,
          origin: res.data.origin,
          destination: res.data.destination,
          stops: res.data.stops.placesOfStops,
          budget: res.data.stops.budget
        });

      })

  }

  componentDidMount() {

    const id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];

    this.grabTravelValues(id);

  }



  render() {
    return (
      <>
        <Car top={8} width={10} />
        <Container>
          <h1 className="heading-top small">
            {this.state.tripName}
          </h1>
          <Gmaps
            inputOrigin={this.state.origin}
            inputDestination={this.state.destination}
            allTrips={this.props.allTrips}
            stops={this.state.stops}
            budget={this.state.budget}
          />

          <Section>
            <YelpBusinesses />
          </Section>
        </Container>
      </>
    );
  }
}

export default TripPlan;