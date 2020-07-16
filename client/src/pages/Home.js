import React, { Component } from 'react';
import API from "../utils/API";
import { Section, Container } from "../components/Grid";
import { Input, Select, FormBtn } from "../components/Form";
import TripsList from "../components/TripsList";
import "../components/List/style.css"

class Home extends Component {
  state = {
    tripName: "",
    origin: "",
    destination: "",
    numOfStops: 0,
    placesOfStops: [],
    budget: 1
  }

  originRef = React.createRef();

  componentDidMount() {
    this.props.loadTrips();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If the number of stops become less than the length of this.state.placesOfStops,
    // it'll delete elements from this.state.placesOfStops
    // until it contains only the same number of places as this.state.numOfStops
    if (this.state.numOfStops !== prevState.numOfStops) {
      const newPlacesOfStops = this.state.placesOfStops;
      while (this.state.numOfStops < newPlacesOfStops.length) {
        newPlacesOfStops.pop();
        console.log(newPlacesOfStops);
      }
      this.setState({
        placesOfStops: newPlacesOfStops
      })
    }
  }

  renderStopLocationInputs = numOfStops => (
    <>
      {numOfStops ?
        this.stopIndexArr(numOfStops).map(num =>
          <Input
            key={`stop${num}`}
            id={`stop${num}`}
            value={this.state.placesOfStops[num - 1]}
            onChange={this.handleAddStopPlaces}
            name={`stop${num}`} // if the name gets changed, it'll affect handleAddStopPlaces logic!!
            label={`Stop${num} Location`}
            placeholder="Enter your stop location."
          />
        ) : null
      }
    </>
  );

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleAddStopPlaces = event => {
    const { name, value } = event.target;
    const newPlacesOfStops = this.state.placesOfStops;
    const index = parseInt(name.split('stop')[1]) - 1;
    newPlacesOfStops[index] = value;

    this.setState({
      placesOfStops: newPlacesOfStops
    })

    console.log('this.state.placesOfStops: ');
    console.log(this.state.placesOfStops);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveTrip({
      tripName: this.state.tripName,
      origin: this.state.origin,
      destination: this.state.destination,
      stops: {
        numberOfStops: this.state.numOfStops,
        placesOfStops: this.state.placesOfStops
      },
      budget: this.state.budget,
      userId: this.props.userId
    })
    .then(res => {
      console.log('Trip saved!');
      const savedTripIds = res.data.trips;
      // Redirect to the saved trip detail page
      window.location.replace(`/trip-plans/${savedTripIds[savedTripIds.length - 1]}`);
    })
    .catch(err => console.log(err));
  }

  stopIndexArr = num => {
    const indexArr = [];
    for (let i = 1; i <= num; i++ ) {
      indexArr.push(i);
    }
    return indexArr;
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
        <Section>
          <h2>Fill out your road trip information!!</h2>
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
              inputChangeHandler={this.handleInputChange}
              name="numOfStops"
              label="How many stops would you like to make?"
              optionVals={numOfStopsArr}
            />
            {this.renderStopLocationInputs(this.state.numOfStops)}
            <Select
              id="budget"
              value={this.state.budget}
              inputChangeHandler={this.handleInputChange}
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
        </Section>

        <Section>
          <h2>Your Road Trip Plans List</h2>
          <TripsList
            allTrips={this.props.allTrips}
            loadTrips={this.props.loadTrips}
            tripData={this.state}
          />
        </Section>
      </Container>
    );
  }
}

export default Home;