import React, { useState, useEffect } from "react";
import API from "../../../utils/API";

export default function Monsters(){
  const [monsters, setMonsters] = useState([]);
  const [page, setPage] = useState(0);

  const monstersbook = function () {
    API.getMonsters().then((res) => {
      setMonsters(res.data.data.results);
      console.log(res.data.data.results);
    });
  };

  useEffect(() => {
    monstersbook();
  }, []);

  return (
    <>
      <div className="row">
        {monsters.slice(4 * page, 4 * page + 4).map((monster) => (
          <div className="container col m3 content-border vertical-spacer-md">
            <h5>{monster.name}</h5>
            <p>{monster.type}</p>
            <p>{monster.size}</p>
            <p>{monster.alignment}</p>
            <p>{monster.armor_class}</p>
            <p>{monster.armor_hit_points}</p>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="center container">
          <button
            className="btn col s12 m6 vertical-spacer-md"
            onClick={() => setPage(page - 1)}
          >
            Click To Decrease
          </button>
          <button
            className="btn col s12 m6 vertical-spacer-md"
            onClick={() => setPage(page + 1)}
          >
            Click To Increase
          </button>
        </div>
      </div>
    </>
  );
};


