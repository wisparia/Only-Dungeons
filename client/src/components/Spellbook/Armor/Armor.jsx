import React, { useState, useEffect } from "react";
import API from "../../../utils/API";

const ArmorBook = () => {
  const [armorState, setArmorState] = useState([]);
  // const [pageState, setPageState] = useState(0);

  const armorSection = function () {
    API.getArmor().then((res) => {
      setArmorState(res.data.data.results);
    });
  };

  useEffect(() => {
    armorSection();
  }, []);

  return (
    <div>
      <h2>Armor</h2>
      {armorState.map((armorSelections) => (
        <div>
          <h3>{armorSelections.name}</h3>
          <p>Armor type: {armorSelections.armor_category}</p>
        </div>
      ))}
    </div>
  );
};

export default ArmorBook;
