// import { load } from "npm";
import React, { useEffect, useState } from "react";
import Dmaster from "../../components/Dmaster/Dmaster";
import DmSearch from "../../components/DmSearch/DmSearch";
import DmCheckbox from "../../components/DmCheckbox/DmCheckbox";
import API from "../../utils/API";
import { resolve } from "path";

function DmDirectory() {
  const [allDms, setDms] = useState([]);
  const [filteredDms, setFilteredDms] = useState([]);
  const [searchedDms, setSearchedDms] = useState([]);
  const [categoryFilters, setFilters] = useState({
    categories: [],
  });

  useEffect(() => {
    loadDms();
  }, []);

  function loadDms() {
    API.getDms()
      .then((res) => {
        setDms(res.data);
        setSearchedDms(res.data);
      })
      .catch((err) => console.log(err));
  }

  function setOriginalDms() {
    setSearchedDms(allDms);
  }

  function handleSearch(event) {
    let searchedDm = event.target.value;
    if (searchedDm === "") {
      setOriginalDms();
    } else {
      setSearchedDms(
        searchedDms.filter((dm) => {
          return dm.userName.indexOf(searchedDm) !== -1;
        })
      );
    }
  }

  // handle filters is updating the state of our search from DmCheckbox.jsx
  const handleFilters = (filters, category) => {
    if (filters.length === 0) {
      setOriginalDms()
    } else {
    console.log(filters)
    const newFilters = { ...categoryFilters };
    newFilters[category] = filters;
    setFilters(newFilters);
  }
    // showFilteredResults(newFilters);    
  };
  
  // Using the array of filters we have to check agains the array of searchedDms
  // to see if the FILTERS we have match the categoryType.____ and if it is true
  // const showFilteredResults = (filters) => {
  //   console.log(searchedDms)
  //   // hardcoded position 0 for proof of concept
  //   let filter = categoryFilters.categories[0]
  //   searchedDms.filter((dm) => {
  //     return (console.log(dm.categoryType.campaigns === true))
  //   })
  //   console.log(categoryFilters.categories);
  // }

  useEffect(() => {
    let filtersArray = categoryFilters.categories;

    setSearchedDms((prevState) => prevState.filter((dm) =>  {
      for (const [key, value ] of Object.entries(dm.categoryType)) {
        console.log(key, value)
        if (key === filtersArray[0] && value === true) {
        console.log(dm)

        // setSearchedDms(filteredDMs)
        // filteredDMs = []  // filteredDMs.push(dm)
        return dm
        }
      }

    }))
  }, [categoryFilters.categories])




  return (
    <>
      <DmSearch handleSearch={handleSearch} />

      <div className="row">
        <div className="col s3 content-border">
          <div className="row">
            <div className="col s12">
              <h5>Category:</h5>
              <DmCheckbox
                handleFilters={(filters) =>
                  handleFilters(filters, "categories")
                }
              />

              <div className="col s12">
                <h5>Availability:</h5>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Monday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Tuesday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Wednesday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Thursday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Friday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Saturday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Sunday</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s9 content-border">
          {searchedDms.map((dm) => (
            <Dmaster key={dm._id} userName={dm.userName} tagLine={dm.tagLine} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DmDirectory;
