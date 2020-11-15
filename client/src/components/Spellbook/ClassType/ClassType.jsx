import React, { useState, useEffect } from "react";
import API from "../../../utils/API";

const ClassesBook = () => {
  const [classesState, setClassesState] = useState([]);
  // const [pageState, setPageState] = useState(0);

  const classSection = function () {
    // console.log("this ran")
    API.getClass().then((res) => {
      // console.log("------------------------------");
      console.log(res.data)
      setClassesState(res.data.data.results);
    });
  };

  useEffect(() => {
    classSection();
  }, []);

  return (
    <div>
      <h2>Classes</h2>
      {classesState.map((classesSelections) => (
        <div>
          <h3>{classesSelections.name}</h3>
          <p>Hitdie: {classesSelections.hit_die}</p>
          {/* <p>Age:{classesSelections.saving_throws}</p> */}
          {/* <p>Description: {classesSelections.size_description}</p> */}
        </div>
      ))}
    </div>
  );
};


export default ClassesBook