import React, { useContext, useEffect, useState } from "react";
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
import AuthContext from "../../context/AuthContext"
function Navbar() {
  

  // This is the info that pulls in the needed things for the book modal. 
  // Please do not delete as I will be coming back to this later.
  
//   const [show, setShow] = useState(false)

//   const showModal = () => {
//     setShow(true);
//   };
 
//   const hideModal = () => {
//     setShow(false);
//   };

//   function handleBook(event) {
//     hideModal();
//     event.preventDefault();
// }

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
      </div>
    </nav>
    {/* This is the book button for the old book modal that we are temporarily scrapping. Will come back later with custom hooks. */}
    {/* <div className="tabs tabs-transparent">
            <BookButton />
        </div> */}
    </>
  );
}

export default Navbar;
