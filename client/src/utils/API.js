import axios from 'axios';

export default {
  getAllTrips: function(userId) {
    return axios.get(`/api/users/${userId}`);
  },
  getTrip: function(tripId) {
    return axios.get(`/api/trips/${tripId}`);
  },
  saveTrip: function(tripData) {
    return axios.post('/api/trips', tripData);
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
  Logout: function(){
    return axios.post(`/api/users/logout`);
  }
}

