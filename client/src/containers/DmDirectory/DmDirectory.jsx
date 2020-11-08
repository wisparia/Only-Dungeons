// import { load } from "npm";
import React, { useEffect, useState } from "react";
import Dmaster from "../../components/Dmaster/Dmaster";
import DmSearch from "../../components/DmSearch/DmSearch";
import DmCheckbox from "../../components/DmCheckbox/DmCheckbox";
import API from "../../utils/API";

function DmDirectory() {
  const [allDms, setDms] = useState([]);
  const [searchedDms, setSearchedDms] = useState([]);
  const [categoryFilters, setFilters] = useState({
    categories: [],
  });
  const searchedArrayDm = [];

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

  // function loadSearchDms() {
  //   setSearchedDms
  // }

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

  const showFilteredResults = (filters) => {
    // console.log(searchedDms);
    // console.log(categoryFilters.categories);
    if (categoryFilters.categories.length > 0) {
      for (var i = 0; i < categoryFilters.categories.length; i++) {
        let filterCategory = categoryFilters.categories[i];

        for (var j = 0; j < searchedDms.length; j++) {
          console.log("====================");
          for (const [key, value] of Object.entries(
            searchedDms[j].categoryType
          )) {
            if (key === filterCategory && value === true) {
              if (searchedArrayDm.includes(filterCategory).pop())
              searchedArrayDm.push(searchedDms[j])
              
              console.log(searchedArrayDm);
              console.log(filterCategory);
              // searchedDms.filter((dm) => {
              // searchedArrayDm.push(dm)
              // })
            } 
          }
        }
      }
    }
  }

  const handleFilters = (filters, category) => {
    // console.log(filters)
    const newFilters = { ...categoryFilters };

    newFilters[category] = filters;

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

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
