import React from 'react';
import axios from 'axios';

class YelpBusinesses extends React.Component {

    getBusinesses = (location) => {

        axios.get(`/api/yelp/businesses/${location}`, {

        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getBusinesses('los angeles')
    }

    render() {
        return (
            <>
            </>
        )
    }
}
export default YelpBusinesses