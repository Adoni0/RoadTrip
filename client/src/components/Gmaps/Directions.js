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
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



class Directions extends React.Component {
  state = {
    directions: null,
    origin: { lat: 34.0522, lng: -118.2437 },
    destination: { lat: 32.7157, lng: -117.1611 }
  };

  // getDistance() {
  //   const origin = this.state.origin;
  //   const destination = this.state.destination;
  //   const travelMode = google.maps.TravelMode.DRIVING;

  //   axios.post('/api/distance', { origin, destination, travelMode })
  //     .then(res => res.data)
  //     .then(data => this.props.setDist(data))
  //     .catch(err => console.log('Unable to get distances: ' + err))
  // }
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
        //response.rows[0].elements[0].distance.text
        //response.rows[0].elements[0].duration.text
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            var distance = element.distance.text;
            var duration = element.duration.text;
            var from = origins[i];
            var to = destinations[j];
            console.log("Distance: " + distance);
            console.log("Duration: " + duration);
          }

        }
      }
    }
  }




      componentDidMount(){
        const directionsService = new google.maps.DirectionsService();
        const origin = this.state.origin;
        const destination = this.state.destination;

        directionsService.route(
          {
            origin: origin,
            destination: destination,
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
