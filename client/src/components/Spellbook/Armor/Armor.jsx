import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import "./Armor.css";

const ArmorBook = () => {
  const [armorState, setArmorState] = useState([]);
  const [page, setPage] = useState(0);
  const history = useHistory()
  const armorSection = function () {
    API.getArmor().then((res) => {
      setArmorState(res.data.data.results);
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
      <button to="#" onClick={()=>history.push("/wpmtest")} className="booktabs"> Weapons </button>
      {armorState.slice(5 * page, 5 * page + 5).map((armorSelections) => (
        <div className="col s12 Book">
          <h3>{armorSelections.name}</h3>
          <p className="col s12 m4">Armor type: {armorSelections.armor_category}</p>
          <p className="col s12 m8">armor things</p>
          </div>
          ))}
          <div className="col s12 center">
          <button to="#" onClick={() => setPage(page - 1)} className="pagetabs"> Page Down </button>
      <button to="#" onClick={() => setPage(page + 1)} className="pagetabs"> Page Up </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ArmorBook;
