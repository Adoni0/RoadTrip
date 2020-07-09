import React, { Component } from 'react';
import { withScriptjs } from "react-google-maps";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Directions from '../components/Directions';

export class Gmaps extends Component {


    render() {
        const  MapLoader = withScriptjs(Directions);
        return (

            <MapLoader
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGVT2hzYa5YsPNOEQL1A0nX7QHGjrGMFI"
                loadingElement={<div style={{ height: `100%` }} />}
            />

        )
    }
}

export default Gmaps;
