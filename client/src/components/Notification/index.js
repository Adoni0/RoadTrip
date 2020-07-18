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
        }, 10000);
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
        </p>
        : ""
    )
  }
}

export default Notification;
