import React, { Component } from 'react';
import { Section, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";


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

  render() {
    return (
      <Container>
        <h1>Home Page</h1>
        <p>
          Put a form here.
        </p>
        <form>
          <Input
            value={this.state.tripName}
            onChange={this.handleInputChange}
            name="tripName"
            label="Your Trip Name"
            placeholder="Enter your trip name."
          />
          <Input
            value={this.state.origin}
            onChange={this.handleInputChange}
            name="origin"
            label="Where are you departing from?"
            placeholder="Enter your starting point."
          />
          <Input
            value={this.state.destination}
            onChange={this.handleInputChange}
            name="destination"
            label="Where are you looking to go?"
            placeholder="Enter your destination."
          />
          <FormBtn
            disabled={!this.state.tripName}
            // onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
        </form>
      </Container>
    );
  }
}

export default Home;