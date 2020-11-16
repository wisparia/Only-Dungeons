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
    if (page < 5 ){
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
      <button to="#" onClick={()=>history.push("/armorpage")} className="booktabs"> Armor </button>
      <button to="#" onClick={()=>history.push("/classespage")} className="booktabs"> Classes </button>
      <button to="#" onClick={()=>history.push("/racepage")} className="booktabs"> Races </button>
      <button to="#" onClick={()=>history.push("/monsterpage")} className="booktabs"> Monsters </button>
      <button to="#" onClick={()=>history.push("/spellpage")} className="booktabs"> Spells </button>
      <button to="#" onClick={()=>history.push("/wpnpage")} className="booktabs"> Weapons </button>

      {!loading ? (
      armorState.slice(5 * page, 5 * page + 5).map((armorSelections) => {
       return (
       <div className="col s12 Book">
          <h3>{armorSelections.name}</h3>
          <p className="col s12 m4">
          {! armorSelections.armor_category ? <li>Armor type: Magical Armor</li> : <li>Armor type: {armorSelections.armor_category}</li>}</p>
          <p className="col s12 m8">
          <ul className col s12 m8>
            {! armorSelections.cost ? <li>Cost: DM's Choice</li> : <li>Cost: {armorSelections.cost.quantity} {armorSelections.cost.unit}</li>}
            {! armorSelections.armor_class ? <li>AC: Depends on Characters Stats</li> : <li>AC: {armorSelections.armor_class.base}</li>}
            {! armorSelections.weight ? <li>Weight: Weightless</li> : <li>Armor type: {armorSelections.weight}</li>}
          </ul>
          </p>
          </div>
          );
        })
      ) : (
        <div className="footerControl">
          
          <h1 className="loading center">Loading Armor <img src={LoadSlime}/></h1>
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
  );
};

export default ArmorBook;
