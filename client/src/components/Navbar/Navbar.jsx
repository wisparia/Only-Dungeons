import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';
import Logo from "./ODlogo2.png";
import "./navbar.css";
// import { Button, Card, Row, Col } from 'react-materialize';
function Navbar() {
    return (
      <nav class="nav-extended">
      <div class="nav-wrapper center">
      <img className="logo responsive-img brand-logo center" src={Logo}/>
      </div>
      <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab"><a href="#test1">Home</a></li>
          <li class="tab"><a href="#test2">Games</a></li>
          <li class="tab"><a href="#test3">Profile</a></li>
          <li class="tab"><a href="#test4">Logout</a></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;