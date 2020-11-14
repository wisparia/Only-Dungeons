import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export const MonsterBook = () => {
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(0);

  const spellBook = function () {
    API.getSpells().then((res) => {
      setSpells(res.data.data.results);
      console.log(res.data.data.results);
    });
  };

  useEffect(() => {
    monstersbook();
  }, []);

  return (
    <div>
      {spells.map((spell) => (
        <p>{spell.name}</p>
      ))}

      {monsters
        ? spells.slice(10 * page, 10 * page + 10).map((element) => {
            return <h1>{element}</h1>;
          })
        : ""}
      <button onClick={() => setPage(page + 1)}>Click To Increase</button>
    </div>
  );
};
