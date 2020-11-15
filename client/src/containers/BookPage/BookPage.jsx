import React, { useContext, useState, useEffect } from "react";
import "./BookPage.css";
import UserContext from "../../context/UserContext";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API";
import AuthContext from "../../context/AuthContext"


function BookPage() {

    const history = useHistory()

  return (
    <>
    <div className="container">
      <div className="row vertical-spacer-md">
      <button to="#" onClick={()=>history.push("/armortest")} className="booktabs"> Armor </button>
      <button to="#" onClick={()=>history.push("/classestest")} className="booktabs"> Classes </button>
      <button to="#" onClick={()=>history.push("/racetest")} className="booktabs"> Races </button>
      <button to="#" onClick={()=>history.push("/monstertest")} className="booktabs"> Monsters </button>
      <button to="#" onClick={()=>history.push("/spelltest")} className="booktabs"> Spells </button>
      <button to="#" onClick={()=>history.push("/wpmtest")} className="booktabs"> Weapons </button>
              
        <div className="col s12 Book">
          <h3>Welcome to the 5th Edition D&D Resource Book!</h3>
          <p className="col s12">Click on the book tabs to reveal information on different subjects! 
          You can then tab through the book to find the info on the item you are searching for.</p>
          </div>
          </div>
      </div>
    
    </>
  );
}

export default BookPage;
