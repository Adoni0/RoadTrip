import React, { Component } from 'react';
import { List, ListItem } from "../List";
import { DeleteBtn, EditBtn, ViewBtn } from "../Btn";
import API from "../../utils/API";

class TripsList extends Component {
  handleEdit = (id, tripData) => {
    return () => {
      // Show Edit form

      // API.updateTrip(id, tripData)
      //   .then(res => this.props.loadTrips())
      //   .catch(err => console.log(err));
    }
  }

  handleDelete = id => {
    return () => {
      API.deleteTrip(id)
        .then(res => this.props.loadTrips())
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <>
        {this.props.allTrips.length ? (
          <List>
            {this.props.allTrips.map(trip => (
              <ListItem key={`tripID-${trip._id}`}>
                <p>{trip.tripName}</p>
                <p>Destination: {trip.destination}</p>
                <p>{trip._id}</p>
                <div className="btns-container">
                  <ViewBtn link={`/trip-plans/${trip._id}`} />
                  <EditBtn editHandler={this.handleEdit(trip._id)} />
                  <DeleteBtn deleteHandler={this.handleDelete(trip._id)} />
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
          <p className="message">There is no saved trip plans.</p>
        )
        }
      </>
    )
  }
}

export default TripsList;