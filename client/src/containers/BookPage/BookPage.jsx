import React, { useContext, useState, useEffect } from "react";
import "./BookPage.css";
import UserContext from "../../context/UserContext";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API";
import AuthContext from "../../context/AuthContext"


function BookPage() {

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
          <h3>Content Name</h3>
          <p className="col s12 m4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem inventore, veniam quibusdam esse laborum amet, error id nam ipsa sapiente debitis, beatae reprehenderit commodi in eveniet fugit similique ut?</p>
          <p className="col s12 m8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem inventore, veniam quibusdam esse laborum amet, error id nam ipsa sapiente debitis, beatae reprehenderit commodi in eveniet fugit similique ut?</p>
          </div>
          <div className="col s12 Book">
          <h3>Content Name</h3>
          <p className="col s12 m4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem inventore, veniam quibusdam esse laborum amet, error id nam ipsa sapiente debitis, beatae reprehenderit commodi in eveniet fugit similique ut?</p>
          <p className="col s12 m8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem inventore, veniam quibusdam esse laborum amet, error id nam ipsa sapiente debitis, beatae reprehenderit commodi in eveniet fugit similique ut?</p>
          </div>
          <div className="col s12 center">
          <button to="#" onClick="" className="pagetabs"> Page Down </button>
      <button to="#" onClick="" className="pagetabs"> Page Up </button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default BookPage;
