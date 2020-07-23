import React from 'react';
import API from '../../utils/API';

class YelpBusinesses extends React.Component {
    state = {
        stops: [],
        yelpBusinesses: {}
    };

    constructor(props) {
        super(props);

        this.divStyle = {
            // float: 'right'
            position: 'relative',
            left: 700,
            bottom: 700
        }

        this.cardStyle = {
            width: 200
        }

        this.rowStyle = {
            width: 450
        }

    }

    getBusinesses = (location) => {
        API.getYelpBusinesses(location).then((res) => {
            console.log(location);
            console.log(res.data);

            this.state.yelpBusinesses[location] = res.data; // dont touch!!

            let tmpObj = { ...this.state.yelpBusinesses };
            tmpObj[location] = res.data;

            this.setState(tmpObj);
        });
    }

    getStops = (id) => {
        API.getTrip(id).then((res) => {
            const stops = res.data.stops.placesOfStops;
            this.setState({ stops });

            stops.forEach((stop) => {
                this.getBusinesses(stop);
            });
        })
    };

    isYelpBusinessesEmpty = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        console.log('there are no yelp businesses');
        return JSON.stringify(obj) === JSON.stringify({}); // true
    };

    componentDidMount() {
        // this.getBusinesses('los angeles')
        let id = window.location.pathname.split('/')[2];
        this.getStops(id);
    }

    render() {
        return (
            <>

                {this.state.stops.length === Object.keys(this.state.yelpBusinesses).length && this.state.stops.length >= 1 ?
                    this.state.stops.map((stop) => {
                        return (
                            <div>
                                <h2 className="text-capitalize text-center mb-4">Route stop: {stop}</h2>
                                <div className="row row-cols-1 row-cols-md-2">
                                    {!this.isYelpBusinessesEmpty(this.state.yelpBusinesses) ? this.state.yelpBusinesses[stop].map((business) => {
                                        console.log(business);

                                        return (
                                            <div className="col mb-4" style={this.cardStyle}>
                                                <div className="card">
                                                    <img src={business.image_url} className="card-img-top max-width:100%" width="200" height="300" alt={business.name} />
                                                    <div className="card-body">
                                                        <h5 className="card-title"><u>{business.name}</u></h5>
                                                        <p className="card-text lead">Reviews: {business.review_count}</p>
                                                        <p className="card-text lead">Rating: {business.rating} Stars</p>
                                                        <p className="card-text lead">Phone #: {business.display_phone}</p>
                                                        <p className="card-text lead"><a href={business.url} target="_blank" rel="noopener noreferrer" >Click here for more info...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }) : null}
                                </div>
                            </div >
                        )
                    }) : null}
            </>
        )
    }
}
export default YelpBusinesses