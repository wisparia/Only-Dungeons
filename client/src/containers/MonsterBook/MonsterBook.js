import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export const MonsterBook = () => {
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
    <div>
      {monsters.slice(10 * page, 10 * page + 10).map((monster) => (
        <div>
          <h4>{monster.name}</h4>
          <p>{monster.type}</p>
          <p>{monster.size}</p>
          <p>{monster.alignment}</p>
          <p>{monster.armor_class}</p>
          <p>{monster.armor_hit_points}</p>
        </div>
      ))}
      <button onClick={() => setPage(page + 1)}>Click To Increase</button>
      {/* {monsters
        ? monsters.slice(10 * page, 10 * page + 10).map((element) => {
            return <h1>{element}</h1>;
          })
        : ""}
      <button onClick={() => setPage(page + 1)}>Click To Increase</button> */}
    </div>
  );
};
