import React from "react";
import "./BookPage.css";

import { useHistory } from "react-router-dom";



function BookPage() {

    const history = useHistory()

  return (
    <>
    <div className="container">
      <div className="row vertical-spacer-md">
      <button to="#" onClick={()=>history.push("/armorpage")} className="booktabs"> Armor </button>
      <button to="#" onClick={()=>history.push("/classespage")} className="booktabs"> Classes </button>
      <button to="#" onClick={()=>history.push("/racepage")} className="booktabs"> Races </button>
      <button to="#" onClick={()=>history.push("/monsterpage")} className="booktabs"> Monsters </button>
      <button to="#" onClick={()=>history.push("/spellpage")} className="booktabs"> Spells </button>
      <button to="#" onClick={()=>history.push("/wpnpage")} className="booktabs"> Weapons </button>
              
        <div className="col s12 Book">
          <h3>Welcome to the 5th Edition D&D Resource Book!</h3>
          <p className="col s12 center">Click on the book tabs to reveal information on different subjects! 
          You can then tab through the book to find the info on the item you are searching for.<br/><br/>
          As a DM you can easily find the quick resources for weapons and monsters on the fly, while
          as a player, get some basic knowledge on playable classes and races so you can delve more into
          what fits your interest!</p>
          <p className="col s12 center">Happy Adventuring!</p>
          </div>
          </div>
      </div>
    
    </>
  );
}

export default BookPage;
