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
  }
}
