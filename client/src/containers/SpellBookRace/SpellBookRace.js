import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export const RaceBook = () => {
  const [raceState, setRaceState] = useState([]);
  // const [pageState, setPageState] = useState(0);

  const raceSection = function () {
    // console.log("this ran")
    API.getRace().then((res) => {
      // console.log("------------------------------");
      // console.log(res.data)
      setRaceState(res.data.data.results);
    });
  };

  useEffect(() => {
    raceSection();
  }, []);

  return (
    <div>
      <h2>Races</h2>
      {raceState.map((raceSelections) => (
        <div>
          <h3>{raceSelections.name}</h3>
          <p>Alignment: {raceSelections.alignment}</p>
          <p>Age:{raceSelections.age}</p>
          <p>Description: {raceSelections.size_description}</p>
        </div>
      ))}
    </div>
  );
};
