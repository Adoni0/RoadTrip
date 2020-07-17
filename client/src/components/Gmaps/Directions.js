/* global google */
import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
import DistanceDisplay from '../DistanceDisplay';
import axios from 'axios';
import API from '../../utils/API';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import 'react-google-places-autocomplete/dist/index.min.css';

// originRef = React.createRef();

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
    // origin: { lat: 34.0522, lng: -118.2437 },
    // destination: { lat: 32.7157, lng: -117.1611 }
    origin: 'Cork, Ireland',
    destination: "Dublin, Ireland",
    distance: '',
    duration: ''
  };


  callback = (response, status) => {
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
          this.setState({ distance: distance, duration: duration })
        }

      }
    }
  }


  componentDidMount() {

    const directionsService = new google.maps.DirectionsService();
    const origin = this.props.inputOrigin;
    const destination = this.props.inputDestination;

    this.setState({
      origin,
      destination
    });

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        // waypoints: [
        //   {
        //     location: 'Santa Clarita, CA',
        //     stopover: true
        //   }, {
        //     location: 'Anaheim, CA',
        //     stopover: true
        //   }],
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
          // this.findDistance();
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }, this.callback);

  }

  render() {
    const stylesArr = [
      {
        "stylers": [
          {
            "saturation": 100
          },
          {
            "gamma": 0.6
          }
        ]
      }
    ];

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 33.4274, lng: -117.6126 }}
        defaultZoom={13}
        defaultOptions={{ styles: stylesArr }}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
        <DistanceDisplay
          inputDestination={this.state.destination}
          inputOrigin={this.state.origin}
          distance={this.state.distance}
          duration={this.state.duration}
        />
      </GoogleMap>

    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `700px`, width: "70%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}



export default Directions;
