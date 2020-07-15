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
  updateTrip: function(tripId, tripData) {
    return axios.put(`/api/trips/${tripId}`, tripData)
  },
  deleteTrip: function(tripId) {
    return axios.delete(`/api/trips/${tripId}`)
  }
}
