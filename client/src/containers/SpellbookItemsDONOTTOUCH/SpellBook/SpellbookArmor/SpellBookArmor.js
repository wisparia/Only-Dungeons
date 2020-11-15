import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export const ArmorBook = () => {
  const [armorState, setArmorState] = useState([]);
  // const [pageState, setPageState] = useState(0);

  const armorSection = function () {
    // console.log("this ran")
    API.getArmor().then((res) => {
      // console.log("------------------------------");
    //   console.log(res.data.data)
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
