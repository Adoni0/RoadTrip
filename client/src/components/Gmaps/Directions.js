/* global google */
import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
// import DistanceDisplay from '../DistanceDisplay';
import axios from 'axios';
import API from '../../utils/API';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import 'react-google-places-autocomplete/dist/index.min.css';


// this.setState({ origin: this.originRef.current.value })

{/* <GooglePlacesAutocomplete
            onSelect={console.log}
            id="origin"
            value={this.state.origin}
            // onChange={this.handleInputChange}
            ref={this.originRef}
            name="origin"
            label="Where are you departing from?"
            placeholder="Enter your starting point."
          /> */}

class Directions extends React.Component {
  state = {
    directions: null,
    origin: { lat: 34.0522, lng: -118.2437 },
    destination: { lat: 32.7157, lng: -117.1611 }
  };


  findDistance = () => {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [this.state.origin],
      destinations: [this.state.destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }, callback);

    function callback(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        // console.log(response);
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            var distance = element.distance.text;
            var duration = element.duration.text;
            
            console.log("Distance: " + distance);
            console.log("Duration: " + duration);
          }

        }
      }
    }
  }

  componentDidMount() {

    const directionsService = new google.maps.DirectionsService();
    const origin = this.state.origin;
    const destination = this.state.destination;

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        waypoints: [
          {
            location: 'Santa Clarita, CA',
            stopover: true
          }, {
            location: 'Anaheim, CA',
            stopover: true
          }],
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
          this.findDistance();
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );

  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 33.4274, lng: -117.6126 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>

    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `750px`, width: "75%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        {/* <DistanceDisplay /> */}
      </div>
    );
  }
}



export default Directions;
