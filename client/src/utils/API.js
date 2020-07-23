import axios from 'axios';

export default {
  getAllTripsByUser: function(userId) {
    return axios.get(`/api/users/${userId}`);
  },
  getAllTripsByDestination: function(destination) {
    return axios.get('/api/trips', {
      params: {
        destination: destination
      }
    });
  },
  getTrip: function(tripId) {
    return axios.get(`/api/trips/${tripId}`);
  },
  getYelpBusinesses: function (location) {
    return axios.get(`/api/yelp/businesses/${location}`);
  },
  saveTrip: function(tripData) {
    return axios.post('/api/trips', tripData);
  },
  updateTrip: function(tripId, tripData) {
    return axios.put(`/api/trips/${tripId}`, tripData)
  },
  deleteTrip: function(tripId) {
    return axios.delete(`/api/trips/${tripId}`)
  },
  Register: function(userData){
    return axios.post(`/api/users/register`, userData);   
  },
  Login: function(userInfo){
    return axios.post(`/api/users/login`, userInfo);
  },
  IsLoggedIn:function(){
    return axios.get( `/api/users/home`)
  },
  Logout: function(){
    return axios.post(`/api/users/logout`);
  }
}

