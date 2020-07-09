/* global google */
import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class Directions extends React.Component {
  state = {
    directions: null
  };

  // displayMarkers = () => {
  //   return this.state.stores.map((store, index) => {
  //     return <Marker key={index} id={index} position={{
  //      lat: store.latitude,
  //      lng: store.longitude
  //    }}
  //    onClick={() => console.log("You clicked me!")} />
  //   })
  // }

  componentDidMount(){
    const directionsService = new google.maps.DirectionsService();
    const origin = { lat: 34.0522, lng: -118.2437 };
    const destination = { lat: 32.7157, lng: -117.1611 };

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
      </div>
    );
  }
}



export default Directions;
