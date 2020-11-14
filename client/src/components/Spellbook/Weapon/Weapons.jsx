import React, { useState, useEffect } from "react";
import API from "../../../utils/API";

const WpnBook = () => {
  const [wpnState, setwpnState] = useState([]);
  // const [pageState, setPageState] = useState(0);

  const wpnSection = function () {
    API.getWpn().then((res) => {
      console.log(res.data.data.results);
      setwpnState(res.data.data.results);
    });
  };

  useEffect(() => {
    wpnSection();
  }, []);

  return (
    <div>
      <h2>Wpns</h2>
      {wpnState.map((wpnSelections) => (
        <div>
          <h3>{wpnSelections.name}</h3>
          <p>Wpn-range: {wpnSelections.weapon_range}</p>
          <p>Wpn-Category: {wpnSelections.weapon_category}</p>
          <p>Wpn-Weight: {wpnSelections.weight} lbs.</p>
        </div>
      ))}
    </div>
  );
};

export default WpnBook;
