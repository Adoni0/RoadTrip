import React, { Component } from "react";
import "./style.css";

class Notification extends Component {
  state = {
    show: false
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.socketData !== prevProps.socketData) {
      if (this.props.socketData) {
        this.setState({
          show: true
        })

        setTimeout(() => {
          this.setState({
            show: false
          })
        }, 15000);
      }
    }
  }

  setUnit = (unit, num) => {
    if (unit === 'person') {
      if (num > 1) {
        return 'people are'
      } else {
        return 'person is'
      }
    }

    if (unit === 'plan') {
      if (num > 1) {
        return 'plans have'
      } else {
        return 'plan has'
      }
    }
  }

  render() {
    const numOfPlansWithSameDest = this.state.show && this.props.socketData.tripData.numOfPlans;
    const numOfOtherUsersWithSameDest = this.state.show && this.props.socketData.tripData.numOfUsers - 1;

    return (
      this.state.show ?
        <p className="notification">
          <span className="title">
            {`${this.props.socketData.tripData.tripName} `}
          </span>
          has been saved!
          <br/>
          <span className="title">
            {`${numOfPlansWithSameDest} `}
          </span>
          {this.setUnit('plan', numOfPlansWithSameDest)} the same destination!!
          <br/>
          {numOfOtherUsersWithSameDest > 0 ? (
            <>
              <span className="title">
                {`${numOfOtherUsersWithSameDest} `}
              </span>
              more {this.setUnit('person', numOfOtherUsersWithSameDest)} going to the same destination!!
            </>
            ) : ''}
        </p>
        : ''
    )
  }
}

export default Notification;
