import axios from 'axios';

export default {
  getTrips: function(userId) {
    return axios.get(`/api/trips/${userId}`);
  },
  saveTrip: function(tripData) {
    return axios.post('/api/trips', tripData)
  }
}
