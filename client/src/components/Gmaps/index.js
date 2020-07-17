import React, { Component } from 'react';
import { withScriptjs } from "react-google-maps";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Directions from './Directions';

export class Gmaps extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const MapLoader = withScriptjs(Directions);
        return (

            <MapLoader
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGVT2hzYa5YsPNOEQL1A0nX7QHGjrGMFI"
                loadingElement={<div style={{ height: `100%` }} />}
                inputOrigin={this.props.inputOrigin}
                inputDestination={this.props.inputDestination}
            />

        )
    }
}

export default Gmaps;
