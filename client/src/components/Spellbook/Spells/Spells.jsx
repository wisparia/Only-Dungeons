import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import "./Spells.css";
import { useHistory } from "react-router-dom";

const BookOfSpells = () => {
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  const spellBook = function () {
    API.getSpells().then((res) => {
      console.log(res.data);
      setSpells(res.data);
      setLoading(false);
      // console.log(spellsToAdd);
    });
    console.log(spells);
  };

  useEffect(() => {
    spellBook();
  }, []);

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

          {!loading ? (
        spells.slice(6 * page, 6 * page + 6).map((element) => {
          return (
            <div className="col s12 Book">
              <h3>{element.name}</h3>
              
              <p className="col s12 m4">Level {element.level} {element.school.name}<br/><br/>
              Available to:
                <ul>
                  <>
                    {element.classes.map((element) => (
                      <li>{element.name}</li>
                    ))}
                  </>
                </ul>
              <p>Range: {element.range}</p>
              </p>
              <div className="col s12 m8"> <p>Duration: {element.duration}</p></div>
              <p className="col s12 m8 description">Description: {element.desc[0]}</p>
            </div>
          );
        })
      ) : (
        <>
          <div class="spinner-layer spinner-yellow">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
          <h2>Loading Spellbook</h2>
        </>
      )}
      {!loading ? (
        <div className="col s12 center">
        <button to="#" onClick={() => setPage(page - 1)} className="pagetabs"> Page Down </button>
    <button to="#" onClick={() => setPage(page + 1)} className="pagetabs"> Page Up </button>
      </div>
      ) : null}
    </div>

         
          
      </div>
    </> 
    )}


export default BookOfSpells;
