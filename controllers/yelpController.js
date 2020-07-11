
const axios = require("axios");


module.exports = {
    getYelpAPI: (req, res) => {
        let YELP_API_KEY = process.env.YELP_API_KEY;

        let yelp = axios.create({
            baseURL: "https://api.yelp.com/v3/",
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
                "Content-type": "application/json",
            },
        })
        yelp("/businesses/search", {
            params: {
                location: "los angeles",
                term: "food",
                limit: 10
            }
        }).then(({ data }) => {
            let { businesses } = data
            businesses.forEach((business) => {
                console.log("Name: ", business.name)
            })
            console.log(businesses);
        })
        res.end();
    }
};
