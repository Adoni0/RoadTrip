import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import TripsList from "../components/TripsList";
import Car from "../components/Car";
import "../components/List/style.css";
import "./style.css";


class TripPlans extends Component {

  componentDidMount() {
    this.props.loadTrips();
  }

  render() {
    return (
      <>
        <Car top={18} width={12} />
        <Container>
          <h1 className="heading-top">
            Your Road Trip Plans
          </h1>

          <Section>
            <TripsList
              {...this.props}
              allTrips={this.props.allTrips}
              loadTrips={this.props.loadTrips}
            />
          </Section>
        </Container>
      </>
    );
  }
}

export default TripPlans;