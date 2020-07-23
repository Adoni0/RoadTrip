import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import TripsList from "../components/TripsList";
import TripForm from "../components/TripForm";
import "../components/List/style.css";
import "./style.css";


class Home extends Component {

  componentDidMount() {
    this.props.loadTrips();
  }

  render() {
    return (
      <Container>
        <h1 className="heading-home">Plan your road trip!</h1>
        <Section>
          {/*<h2>Fill out your road trip information!!</h2>*/}
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