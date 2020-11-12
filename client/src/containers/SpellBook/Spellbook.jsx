import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function Spellbook() {
  const [classInfo, setClassInfo] = useState({});

  function dndInfo(e) {
    // e.preventDefault();
    // console.log("----------------------------------")
    // console.log("this clicked")
    // console.log("----------------------------------")
    API.getDndInfo()
      .then((res) => {
        // console.log(res.data);
        console.log(res.data.proficiencies[0].name);
        setClassInfo(res.data);
      })
      .catch((err) => console.log(err));
  }

  //   console.log("====================================");
  //   console.log(classInfo);
  //   console.log("====================================");

  // dndInfo()

  useEffect(() => {
    dndInfo();
  }, []);

  return (
    <>
      <div>
        <h1> this will be the spell book </h1>
        <div className="content-border">
          <select className="browser-default">
            <option value="">Select</option>
            <option value="Barbarian">Barbarian</option>
          </select>
          <div>
            <button onClick={dndInfo}>test to get back API</button>
          </div>
          <div>
            {classInfo && (
              <>
                <h1>{classInfo.name}</h1>
                <br />
              </>
            )}

            {/* {classInfo && (
              <ul>
                {classInfo.proficiencies.map((proficiencyType, i) => (
                  <li>
                    {i + 1} {proficiencyType.name}
                  </li>
                ))}
              </ul>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Spellbook;
