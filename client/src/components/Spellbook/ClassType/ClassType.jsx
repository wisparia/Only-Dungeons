import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import LoadSlime from "../../assets/Slime-Gif.gif";
import "./classtype.css"

const ClassesBook = () => {
  const [classesState, setClassesState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  // const [pageState, setPageState] = useState(0);

  function handlePageUp () {
    if (page !== 0){
      setPage(page - 1) 
    } 
  }
  
  function handlePageDown () {
    if (page < 1){
      setPage(page + 1) 
    } 
  }
  const history = useHistory()
  const classSection = function () {
    // console.log("this ran")
    API.getClass().then((res) => {
      // console.log("------------------------------");
      console.log(res.data)
      setClassesState(res.data.data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    classSection();
  }, []);

  console.log(classesState)

  let temp

  return (

<>
    
    <div className="container">
      <div className="row vertical-spacer-md">
      <button to="#" onClick={()=>history.push("/armorpage")} className="booktabs"> Armor </button>
      <button to="#" onClick={()=>history.push("/classespage")} className="booktabs"> Classes </button>
      <button to="#" onClick={()=>history.push("/racepage")} className="booktabs"> Races </button>
      <button to="#" onClick={()=>history.push("/monsterpage")} className="booktabs"> Monsters </button>
      <button to="#" onClick={()=>history.push("/spellpage")} className="booktabs"> Spells </button>
      <button to="#" onClick={()=>history.push("/wpnpage")} className="booktabs"> Weapons </button>

          {!loading ? (
            classesState.slice(6 * page, 6 * page + 6).map((classesSelections) => {
// testing
          return (
            <div className="col s12 Book">
              <h3>{classesSelections.name}</h3>
              
              <p className="col s12 m4">Hitdie: {classesSelections.hit_die}
              <br/>
              <br/>
              Subclasses
                <ul>
                  <>
                    {classesSelections.subclasses.map((element)=>(
                      <li>{element.name}</li>
                    ))}
                  </>
                </ul>
              </p>
              
              <p className="col s12 m8 description">
              Proficiencies:
                <ul>
                  <>
                    {classesSelections.proficiencies.map((pros)=>(
                      <li>{pros.name}</li>
                    ))}
                  </>
                </ul>
            
              </p>
            </div>
          );
        })
      ) : (
        <div className="footerControl">
          
          <h1 className="loading center">Loading Classes <img src={LoadSlime}/></h1>
        </div>
      )}
      {!loading ? (
        <div className="col s12 center">
        <button to="#" onClick={handlePageDown} className="pagetabs"> Page Down </button>
    <button to="#" onClick={handlePageUp} className="pagetabs"> Page Up </button>
      </div>
      ) : null}
    </div>

         
          
      </div>
    </> 

  );
};


export default ClassesBook;