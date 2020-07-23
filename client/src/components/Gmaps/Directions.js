/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
import DistanceDisplay from '../DistanceDisplay';


class Directions extends React.Component {
  state = {
    directions: null,
    origin: '',
    destination: "",
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
          var distance = element.distance ? element.distance.text : "Invalid origin or destination";
          var duration = element.duration ? element.duration.text : "no duration returned";

          // console.log("Distance: " + distance);
          // console.log("Duration: " + duration);
          this.setState({ distance: distance, duration: duration })
        }

      }
    }
  }


  componentDidMount() {

    const directionsService = new google.maps.DirectionsService();
    const origin = this.props.inputOrigin;
    const destination = this.props.inputDestination;

    // this.setState({
    //   origin,
    //   destination
    // });

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        waypoints: this.props.stops.map(stop => {
          return { location: stop, stopover: true }
        }),
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
        defaultZoom={10}
        defaultOptions={{ styles: stylesArr }}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
        <DistanceDisplay
          // inputDestination={this.state.destination}
          // inputOrigin={this.storigin}
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
