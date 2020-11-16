import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import LoadSlime from "../../assets/Slime-Gif.gif";
import "./race.css"

const RaceBook = () => {
  const [raceState, setRaceState] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const history = useHistory()
  // const [pageState, setPageState] = useState(0);

  const raceSection = function () {

    API.getRace().then((res) => {
      setRaceState(res.data.data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    raceSection();
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
        raceState.slice(6 * page, 6 * page + 6).map((raceSelections) => {
          return (
            <div className="col s12 Book">
              <h3>{raceSelections.name}</h3>
              
              <p className="col s12">
                Alignment: {raceSelections.alignment}<br/><br/>
                Age:{raceSelections.age}<br/><br/>
                Description: {raceSelections.size_description}<br/><br/>
              </p>
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
          <h1 className="loading center">Loading Races <img src={LoadSlime}/></h1>
        </div>
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

  );
};

export default RaceBook;
