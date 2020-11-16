import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import "./Spells.css";
import { useHistory } from "react-router-dom";
import LoadSlime from "../../assets/Slime-Gif.gif";
import "./Spells.css"



const BookOfSpells = () => {
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  function handlePageUp () {
    if (page !== 0){
      setPage(page - 1) 
    } 
  }
  
  function handlePageDown () {
    if (page < 53){
      setPage(page + 1) 
    } 
  }

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
      <button to="#" onClick={()=>history.push("/armorpage")} className="booktabs"> Armor </button>
      <button to="#" onClick={()=>history.push("/classespage")} className="booktabs"> Classes </button>
      <button to="#" onClick={()=>history.push("/racepage")} className="booktabs"> Races </button>
      <button to="#" onClick={()=>history.push("/monsterpage")} className="booktabs"> Monsters </button>
      <button to="#" onClick={()=>history.push("/spellpage")} className="booktabs"> Spells </button>
      <button to="#" onClick={()=>history.push("/wpnpage")} className="booktabs"> Weapons </button>


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
        <div className="footerControl">
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
          <h1 className="loading center">Loading Spells <img src={LoadSlime}/></h1>
        </div>
      )}
      {!loading ? (
        <div className="col s12 center">
        <button to="#" onClick={handlePageDown} className="pagetabs"> Page Down </button>
    <button to="#" onClick={handlePageUp} className="pagetabs"> Page Up </button>
      </div>
      ) : null}
    </div>

         
          
      </div>
    </> 
    )}


export default BookOfSpells;
