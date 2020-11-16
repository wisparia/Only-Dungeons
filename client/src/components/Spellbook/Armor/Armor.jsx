import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import "./Armor.css";
import LoadSlime from "../../assets/Slime-Gif.gif";

const ArmorBook = () => {
  const [armorState, setArmorState] = useState([]);
  const [page, setPage] = useState(0);
  const history = useHistory()
  const [loading, setLoading] = useState(true);

  function handlePageUp () {
    if (page !== 0){
      setPage(page - 1) 
    } 
  }
  
  function handlePageDown () {
    if (page < 5){
      setPage(page + 1) 
    } 
  }

  const armorSection = function () {
    API.getArmor().then((res) => {
      setArmorState(res.data.data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    armorSection();
  }, []);

  return (
    // <div>
    //   <h2>Armor</h2>
    //   {armorState.map((armorSelections) => (
    //     <div>
    //       <h3>{armorSelections.name}</h3>
    //       <p>Armor type: {armorSelections.armor_category}</p>
    //     </div>
    //   ))}
    // </div>

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
      armorState.slice(5 * page, 5 * page + 5).map((armorSelections) => {
       return (
       <div className="col s12 Book">
          <h3>{armorSelections.name}</h3>
          <p className="col s12 m4">Armor type: {armorSelections.armor_category}</p>
          <p className="col s12 m8">
          <ul className col s12 m8>
            <li>Cost: {armorSelections.cost.quantity} {armorSelections.cost.unit}</li>
            <li>AC: {armorSelections.armor_class.base}</li>
            <li>Weight: {armorSelections.weight}</li>
          </ul>
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
          <h1 className="loading center">Loading Armor <img src={LoadSlime}/></h1>
        </>
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
  );
};

export default ArmorBook;
