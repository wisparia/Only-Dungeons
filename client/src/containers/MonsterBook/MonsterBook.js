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
      {monsters.map((monster) => (
        <p>{monster.name}</p>
      ))}

      {/* {monsters
        ? monsters.slice(10 * page, 10 * page + 10).map((element) => {
            return <h1>{element}</h1>;
          })
        : ""}
      <button onClick={() => setPage(page + 1)}>Click To Increase</button> */}
    </div>
  );
};
