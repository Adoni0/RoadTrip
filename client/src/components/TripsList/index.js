import React, { Component } from 'react';
import { List, ListItem } from "../List";
import { DeleteBtn, EditBtn, ViewBtn } from "../Btn";
import API from "../../utils/API";
import TripForm from "../TripForm";
import "../Form/style.css";
import "./style.css";

class TripsList extends Component {
  state = {
    showEditForm: false,
    selectedTripData: {}
  }

  handleEdit = (trip) => {
    return () => {
      console.log('handleEdit!!');
      this.setState({
        showEditForm: true,
        selectedTripData: trip
      })
    }
    // API.updateTrip(id, tripData)
    //   .then(res => this.props.loadTrips())
    //   .catch(err => console.log(err));
  }

  handleDelete = id => {
    return () => {
      API.deleteTrip(id)
        .then(res => this.props.loadTrips())
        .catch(err => console.log(err));
    }
  }

  hideEditForm = () => {
    this.setState({
      showEditForm: false
    })
  }

  render() {
    return (
      <>
        {this.props.allTrips.length ? (
          <List>
            {this.props.allTrips.reverse().map(trip => (
              <ListItem key={`tripID-${trip._id}`}>
                <p className="trip-name">
                  <ion-icon name="car"></ion-icon>
                  {trip.tripName}
                </p>
                <p><span className="label">Start</span>{trip.origin}</p>
                <div className="arrow">
                  <ion-icon name="arrow-down"></ion-icon>
                </div>
                <p><span className="label">Destination</span>{trip.destination}</p>
                <div className="btns-container">
                  <ViewBtn link={`/trip-plans/${trip._id}`} />
                  <EditBtn editHandler={this.handleEdit(trip)} />
                  <DeleteBtn deleteHandler={this.handleDelete(trip._id)} />
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
          <p className="message">There is no saved trip plans.</p>
        )
        }

        {this.state.showEditForm ? (
          <>
            <div className="form-modal">
              <TripForm
                {...this.props}
                selectedTripData={this.state.selectedTripData}
                formType='edit'
                socket={this.props.socket}
              />
              <div className="close-btn" onClick={this.hideEditForm}>
                <ion-icon name="close-circle"></ion-icon>
              </div>
            </div>
            <div className="dark-bg" onClick={this.hideEditForm}>
            </div>
          </>
        ) : null}
      </>
    )
  }
}

export default TripsList;