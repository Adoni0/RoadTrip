import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import TripsList from "../components/TripsList";
import "../components/List/style.css";
import "./style.css";


class TripPlans extends Component {

  componentDidMount() {
    this.props.loadTrips();
  }

  render() {
    return (
      <Container>
        <h1 className="heading-top">
          Your Road Trip Plans
          <div className="car-red">
            <img src={`${process.env.PUBLIC_URL}/images/car-red.png`} />
          </div>
        </h1>

        <Section>
          <TripsList
            {...this.props}
            allTrips={this.props.allTrips}
            loadTrips={this.props.loadTrips}
          />
        </Section>
      </Container>
    );
  }
}

export default TripPlans;