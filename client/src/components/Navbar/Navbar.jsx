import React, { useEffect, useState } from "react";
import HomeButton from "../HomeButton/HomeButton";
import GamesButton from "../GamesButton/GamesButton";
import ProfileButton from "../ProfileButton/ProfileButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import "materialize-css";
import Logo from "./ODlogo2.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import BookButton from "../BookButton/BookButton";
import BookModal from "../BookModal/BookModal"
import { Button, Card, Row, Col } from 'react-materialize';

function Navbar() {

  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true);
  };
 
  const hideModal = () => {
    setShow(false);
  };

  function handleBook(event) {
    hideModal();
    event.preventDefault();
}
    return (
      <>
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
{/*         
          <Link to="/Spellbook">SpellBook</Link> */}
          {/* <button type = "button"  onClick={showModal}  className="btn">Book of Smells</button> */}
        
      </div>
    </nav>
    <div className="tabs tabs-transparent">
            <BookButton />
        </div>
    {/* <BookModal show = {show} handleBook = {handleBook} handleClose ={hideModal}/> */}
    </>
  );
}

export default Navbar;
