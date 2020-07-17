import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import TripsList from "../components/TripsList";
import TripForm from "../components/TripForm";
import "../components/List/style.css";


class Home extends Component {

  componentDidMount() {
    this.props.loadTrips();
  }

  render() {
    return (
      <Container>
        <h1>Home Page</h1>
        <Section>
          <h2>Fill out your road trip information!!</h2>
          <TripForm {...this.props} />
        </Section>

        <Section>
          <h2>Your Road Trip Plans List</h2>
          <TripsList
            allTrips={this.props.allTrips}
            loadTrips={this.props.loadTrips}
          />
        </Section>
      </Container>
    );
  }
}

export default Home;