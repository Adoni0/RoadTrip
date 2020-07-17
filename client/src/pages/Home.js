import React, { Component } from 'react';
import API from "../utils/API";
import TripForm from "../components/TripForm";
import { Section, Container } from "../components/Grid";
import { Input, Select, FormBtn } from "../components/Form";
import TripsList from "../components/TripsList";
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