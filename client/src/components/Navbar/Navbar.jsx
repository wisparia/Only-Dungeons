import React from 'react';
import HomeButton from "../HomeButton/HomeButton";
import GamesButton from "../GamesButton/GamesButton";
import ProfileButton from "../ProfileButton/ProfileButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import "materialize-css";
import Logo from "./ODlogo2.png";
import "./navbar.css";
import { Link } from "react-router-dom"
// import { Button, Card, Row, Col } from 'react-materialize';
function Navbar() {
    return (
      <nav className="nav-extended">
      <div className="nav-wrapper center">
      <img className="logo responsive-img brand-logo center" src={Logo} alt= "logo"/>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <HomeButton />
          <GamesButton />
          <ProfileButton />
          <LogoutButton />
        </ul>
        <a className="tab">
          <Link to="/Spellbook">SpellBook</Link>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
