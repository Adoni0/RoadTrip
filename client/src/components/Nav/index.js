import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink exact to="/" className="navbar-brand">
          <ion-icon name="car-sport"></ion-icon>
          RoadtripPlanner
        </NavLink>

        <ul>
          <li>
            <NavLink exact to="/" className="navlink" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/trip-plans" className="navlink" activeClassName="active">
              Saved Trips
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
