import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';
import Logo from "./ODlogo2.png";
import "./navbar.css";
// import { Button, Card, Row, Col } from 'react-materialize';
function Navbar() {
    return (
      <nav className="nav-extended">
      <div className="nav-wrapper center">
      <img className="logo responsive-img brand-logo center" src={Logo}/>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab"><a href="#test1">Home</a></li>
          <li className="tab"><a href="#test2">Games</a></li>
          <li className="tab"><a href="#test3">Profile</a></li>
          <li className="tab"><a href="#test4">Logout</a></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;