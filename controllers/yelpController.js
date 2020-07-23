const axios = require("axios");

let yelp = axios.create({
    baseURL: "https://api.yelp.com/v3/",
    headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        "Content-type": "application/json",
    },
})

module.exports = {
    getBusinesses: (req, res) => {

        yelp("/businesses/search", {
            params: {
                location: req.params.location,
                term: "restaurants",
                limit: 5
            }
        }).then(({ data }) => {
            let { businesses } = data
            res.json(businesses);
        }).catch((err) => {
            res.status(500).json(err)
        })
    }
};
