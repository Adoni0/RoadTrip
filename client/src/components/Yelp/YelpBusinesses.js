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

    isYelpBusinessesEmpty = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({}); // true
    };

    componentDidMount() {
        // this.getBusinesses('los angeles')
        let id = window.location.pathname.split('/')[2];
        this.getStops(id);
    }

    //     {
    //     "sedona": [
    //         {
    //             "id": "sccvO0Avfq-QZv2ghUsWoA",
    //             "alias": "the-hudson-sedona-2",
    //             "name": "The Hudson",
    //             "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/w3vmK-9KKxrRGxZ8nOM82Q/o.jpg",
    //             "is_closed": false,
    //             "url": "https://www.yelp.com/biz/the-hudson-sedona-2?adjust_creative=O1hvoa5YLZwrN-ewa0XxZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=O1hvoa5YLZwrN-ewa0XxZQ",
    //             "review_count": 1667,
    //             "categories": [
    //                 {
    //                     "alias": "cocktailbars",
    //                     "title": "Cocktail Bars"
    //                 },
    //                 {
    //                     "alias": "burgers",
    //                     "title": "Burgers"
    //                 },
    //                 {
    //                     "alias": "newamerican",
    //                     "title": "American (New)"
    //                 }
    //             ],
    //             "rating": 4.5,
    //             "coordinates": {
    //                 "latitude": 34.8587487313614,
    //                 "longitude": -111.762560986105
    //             },
    //             "transactions": [],
    //             "price": "$$",
    //             "location": {
    //                 "address1": "671 State Rte 179",
    //                 "address2": "Ste D",
    //                 "address3": "",
    //                 "city": "Sedona",
    //                 "zip_code": "86336",
    //                 "country": "US",
    //                 "state": "AZ",
    //                 "display_address": [
    //                     "671 State Rte 179",
    //                     "Ste D",
    //                     "Sedona, AZ 86336"
    //                 ]
    //             },
    //             "phone": "+19288624099",
    //             "display_phone": "(928) 862-4099",
    //             "distance": 1984.2090443253812
    //         },
    //     ]
    // }

    render() {
        return (
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
                                                <p className="card-text lead"><a href={business.url} target="_blank" >Click here for more info...</a></p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }) : null}
                            {/* {stop.map(business => {
                                return (
                                    <div>
                                        <h3>{business.name}</h3>
                                        <img src={business.image_url} alt={business.name} />
                                        <p>Rating: {business.rating}</p>
                                        <a href={business.url} target="_blank">{business.name}</a>
                                    </div>
                                )
                            })} */}
                        </div>
                    </div >
                )
            })
        )
    }
}
export default YelpBusinesses