import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">RoadTripPlanner</div>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/trip-plans" activeClassName="active">
              Saved Trips
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
