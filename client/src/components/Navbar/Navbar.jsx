import React, {useContext} from 'react';
import UserContext from "../../context/UserContext";
import HomeButton from "../HomeButton/HomeButton";
import GamesButton from "../GamesButton/GamesButton";
import ProfileButton from "../ProfileButton/ProfileButton";
import LogoutButton from "../LogoutButton/LogoutButton"
import 'materialize-css';
import Logo from "./ODlogo2.png";
import "./navbar.css";
// import { Button, Card, Row, Col } from 'react-materialize';
function Navbar() {
  const {userId} = useContext(UserContext);
  
    return (
      <nav className="nav-extended">
      <div className="nav-wrapper center">
      <img className="logo responsive-img brand-logo center" src={Logo}/>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <HomeButton />
          <GamesButton />
          <ProfileButton />
          <LogoutButton />
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;