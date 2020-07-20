import React from 'react';
import axios from 'axios';
import API from '../../utils/API';

class YelpBusinesses extends React.Component {
    state = {
        stops: [],
        yelpBusinesses: {}
    };

    getBusinesses = (location) => {
        API.getYelpBusinesses(location).then((res) => {
            console.log(res);
            this.setState({
                yelpBusinesses: {
                    [location]: res.data
                }
            });
        });
    }

    getStops = (id) => {
        API.getTrip(id).then((res) => {
            const stops = res.data.stops.placesOfStops
            this.setState({ stops });

            stops.forEach((stop) => {
                this.getBusinesses(stop);
            });
        })
    };

    componentDidMount() {
        // this.getBusinesses('los angeles')
        let id = window.location.pathname.split('/')[2];
        this.getStops(id);
    }



    render() {
        return (
            this.state.stops.map((stop) => {
                return (
                    <div>
                        <h2 className="text-secondary">{stop}</h2>
                        <div className="row row-cols-1 row-cols-md-2" style={this.rowStyle}>
                            {this.state.yelpBusinesses[stop].map(business => {
                                return (
                                    <div>
                                        <h3>{business.name}</h3>
                                        <img src={business.image_url} alt={business.name} />
                                        <p>Rating: {business.rating}</p>
                                        <a href={business.url} target="_blank">{business.name}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
        )
    }
}
export default YelpBusinesses