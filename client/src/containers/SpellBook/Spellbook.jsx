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
        // console.log(res.data.proficiencies[0].name);
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
        <div className="container">
          <h1 className="text-center"> Spellbook </h1>
          <div className="content-border">
            <select className="browser-default">
              <option value="">Select</option>
              {/* <option value="rogue" onChange={dndInfo}>Rogue</option> */}
            </select>
            {/* <div>
            <button value = "rogue" onClick={dndInfo}>test to get back API</button>
          </div> */}
            <div className="col 1">
              {classInfo && (
                <>
                  <h1 className="col">{classInfo.name}</h1>
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
      </div>
    </>
  );
}

export default Spellbook;
