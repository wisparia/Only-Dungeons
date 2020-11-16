import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import LoadSlime from "../../assets/Slime-Gif.gif";

const WpnBook = () => {
  const [wpnState, setwpnState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  // const [pageState, setPageState] = useState(0);
  const history = useHistory()
  const wpnSection = function () {
    API.getWpn().then((res) => {
      console.log(res.data.data.results);
      setwpnState(res.data.data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    wpnSection();
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
      <button to="#" onClick={()=>history.push("/wpntest")} className="booktabs"> Weapons </button>

          {!loading ? (
            wpnState.slice(6 * page, 6 * page + 6).map((wpnSelections) => {
// testing
          return (
            <div className="col s6 Book">
              <h3>{wpnSelections.name}</h3>
              
              <p className="col s12">Wpn-range: {wpnSelections.weapon_range}<br/><br/>
              Wpn-Category: {wpnSelections.weapon_category}<br/><br/>
              Wpn-Weight: {wpnSelections.weight} lbs.
              </p>
            
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
          <h1 className="loading">Loading Weapons <img src={LoadSlime}/></h1>
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

  );
};

export default WpnBook;
