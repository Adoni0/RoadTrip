import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import TripsList from "../components/TripsList";
import TripForm from "../components/TripForm";
import "../components/List/style.css";
import "./style.css";


class Home extends Component {

  componentDidMount() {
    this.props.loadTrips();

    if (!this.props.userId) { window.location = '/login' }
  }

  render() {
    return (
      <Container>
        <h1 className="heading-top">
          Plan your road trip!
          <div className="car-red">
            <img src={`${process.env.PUBLIC_URL}/images/car-red.png`} />
          </div>
        </h1>

        <Section>
          <TripForm {...this.props} formType='new' socket={this.props.socket} />
        </Section>

        <Section>
          <h2>Your Road Trip Plans List</h2>
          <div className="trip-list-container-short">
            <TripsList
              {...this.props}
              allTrips={this.props.allTrips}
              loadTrips={this.props.loadTrips}
            />
          </div>
        </Section>
      </Container>
    );
  }
}

export default Home;