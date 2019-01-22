import React, { Component } from "react";
import "../CSS/AdminHeader.css";
import logo from "../images/logoAllsponsored.png";
import { Link } from "react-router-dom";
import iconHome from "../images/iconHome.svg";
import iconUser from "../images/iconUser.svg";
import logout from "../images/logout.svg";

class ClubHeader extends Component {
  handleClick = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div className="AdminHeader">
        <a href="http://allsponsored.com/" className="logo-allsponsored">
          <img className="iconLogo" src={logo} alt="logo allsponsored" />
        </a>
        <div className="menu">
          <Link className="icon" to="/club-home">
            <img src={iconHome} alt="icon home" />
          </Link>
          <Link className="icon" to="/club-parameters">
            <img src={iconUser} alt="icon User" />
          </Link>
          <Link onClick={this.handleClick} className="icon logout" to="/">
            <img src={logout} alt="icon logout" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ClubHeader;
