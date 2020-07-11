import React, { Component } from 'react';
import API from "../utils/API";
import { Section, Container } from "../components/Grid";
import { Input, Select, FormBtn } from "../components/Form";


class Home extends Component {
  state = {
    tripName: "",
    origin: "",
    destination: "",
    numOfStops: 0,
    budget: 1
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveTrip({
      tripName: this.state.tripName,
      origin: this.state.origin,
      destination: this.state.destination,
      numberOfStops: this.state.numOfStops,
      budget: this.state.budget
    })
      .then(res => {
        console.log('Trip saved!');
        // this.getTrips();
      })
      .catch(err => console.log(err));
  }

  render() {
    const numOfStopsArr = [
      { optionVal: 0, textVal: 0 },
      { optionVal: 1, textVal: 1 },
      { optionVal: 2, textVal: 2 },
      { optionVal: 3, textVal: 3 },
    ];
    const budgetArr = [
      { optionVal: 1, textVal: '$' },
      { optionVal: 2, textVal: '$$' },
      { optionVal: 3, textVal: '$$$' },
    ];

    return (
      <Container>
        <h1>Home Page</h1>
        <p>
          Put a form here.
        </p>
        <form>
          <Input
            id="tripName"
            value={this.state.tripName}
            onChange={this.handleInputChange}
            name="tripName"
            label="Your Trip Name"
            placeholder="Enter your trip name."
          />
          <Input
            id="origin"
            value={this.state.origin}
            onChange={this.handleInputChange}
            name="origin"
            label="Where are you departing from?"
            placeholder="Enter your starting point."
          />
          <Input
            id="destination"
            value={this.state.destination}
            onChange={this.handleInputChange}
            name="destination"
            label="Where are you looking to go?"
            placeholder="Enter your destination."
          />
          <Select
            id="numOfStops"
            value={this.state.numOfStops}
            onChange={this.handleInputChange}
            name="numOfStops"
            label="How many stops would you like to make?"
            optionVals={numOfStopsArr}
          />
          <Select
            id="budget"
            value={this.state.budget}
            onChange={this.handleInputChange}
            name="budget"
            label="Budget?"
            optionVals={budgetArr}
          />
          <FormBtn
            disabled={!this.state.tripName}
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
        </form>
      </Container>
    );
  }
}

export default Home;