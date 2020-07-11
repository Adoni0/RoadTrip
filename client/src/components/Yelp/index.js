import React from 'react';
import axios from 'axios';


class Yelp extends React.Component {
    getYelpAPI = () => {
        let YELP_API_KEY = process.env.YELP_API_KEY;

        let yelp = axios.create({
            baseURL: "https://api.yelp.com/v3/",
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
                "Content-type": "application/json",
            },
        })
        yelp("/businesses/9QFiF_YBCKvWsUu50G_yxg/reviews").then(({ data }) => {
            console.log(data)
        })

        this.getYelpAPI();
    }

}