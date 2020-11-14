import React, { useState, useEffect } from "react";
import API from "../../../utils/API";

const BookOfSpells = () => {
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const spellBook = function () {
    API.getSpells().then((res) => {
      console.log(res.data);
      setSpells(res.data);
      setLoading(false);
      // console.log(spellsToAdd);
    });
    console.log(spells);
  };

  useEffect(() => {
    spellBook();
  }, []);

  return (
    <div>
      {!loading ? (
        spells.slice(10 * page, 10 * page + 10).map((element) => {
          return (
            <div>
              <h4>{element.name}</h4>
              <p>
                Level {element.level} {element.school.name}
              </p>
              <p>
                Available to:
                <ul>
                  <>
                    {element.classes.map((element) => (
                      <li>{element.name}</li>
                    ))}
                  </>
                </ul>
              </p>

              <p>Duration: {element.duration}</p>
              <p>Range: {element.range}</p>
              <p>Description: {element.desc[0]}</p>
            </div>
          );
        })
      ) : (
        <>
          <div class="spinner-layer spinner-yellow">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
          <h2>Loading Spellbook</h2>
        </>
      )}
      {!loading ? (
        <button onClick={() => setPage(page + 1)}>Click To Increase</button>
      ) : null}
    </div>
  );
};

export default BookOfSpells;
