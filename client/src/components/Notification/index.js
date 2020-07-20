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

  render() {
    return (
      this.state.show ?
        <p className="notification">
          <span className="title">
            {`${this.props.socketData.tripData.tripName} `}
          </span>
          has been saved!
          <br/>
          <span className="title">
            {`${this.props.socketData.tripData.numOfPlans} `}
          </span>
          plans have the same destination!!
          <br/>
          <span className="title">
            {`${this.props.socketData.tripData.numOfUsers} `}
          </span>
          people are going to the same destination!!
        </p>
        : ""
    )
  }
}

export default Notification;
