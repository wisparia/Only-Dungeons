// import { load } from "npm";
import React, { useEffect, useState } from "react";
import Dmaster from "../../components/Dmaster/Dmaster";
import DmSearch from "../../components/DmSearch/DmSearch";
import DmCategoryCheckbox from "../../components/DmCategoryCheckbox/DmCategoryCheckbox";
import DmAvailabilityCheckbox from "../../components/DmAvailabilityCheckbox/DmAvailabilityCheckbox";
import API from "../../utils/API";

function DmDirectory() {
  const [allDms, setDms] = useState([]);
  const [searchBox, setSearchBox] = useState((""));
  const [searchedDms, setSearchedDms] = useState([]);
  const [categoryFilters, setFilters] = useState({
    categories: [],
  });
  const [availabilityFilters, setAvailabilityFilters] = useState({
    days: [],
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
  // watch out there cowboy
  function setUnoriginalDms() {
    setSearchedDms(searchedDms);
  }

  function handleSearch(event) {
    let searchedDm = event.target.value;
    setSearchBox(searchedDm)

    if (searchedDm == "") {
      setOriginalDms();
    } else {
      // setSearchedDms(
      const searchedBoxDms = allDms.filter((dm) => {
          return dm.userName.indexOf(searchedDm) !== -1;
        })
      // );
      setSearchedDms(searchedBoxDms)
    }
  }

  useEffect(() => {
    console.log(searchBox)
    // setOriginalDms()
  }, [searchBox])

  const handleFilters = (filters, category) => {
    if (filters.length === 0 && availabilityFilters.days.length === 0) {
      setOriginalDms();
      // setFilters()
    } else {
      const newFilters = { ...categoryFilters };
      newFilters[category] = filters;
      setFilters(newFilters);
    }
  };

  const handleDayFilters = (dayFilters, day) => {
    if (dayFilters.length === 0 && categoryFilters.categories.length === 0) {
      setOriginalDms();
    } else {
      const newFilters = { ...availabilityFilters };
      newFilters[day] = dayFilters;
      setAvailabilityFilters(newFilters);
    }
  };

  useEffect(() => {
    if (
      availabilityFilters.days.length > 0 &&
      categoryFilters.categories.length > 0
    ) {
      // setUnoriginalDms();
      setOriginalDms();
      let dayFiltersArray = availabilityFilters.days;
      let filtersArray = categoryFilters.categories;
      for (let i = 0; i < filtersArray.length; i++) {
        setSearchedDms((prevState) =>
          prevState.filter((dm) => {
            for (const [key, value] of Object.entries(dm.categoryType)) {
              if (key === filtersArray[i] && value === true) {
                return dm;
              }
            }
          })
        );
      }
      for (let i = 0; i < dayFiltersArray.length; i++) {
        setSearchedDms((prevState) =>
          prevState.filter((dm) => {
            for (const [key, value] of Object.entries(dm.availability)) {
              if (key === dayFiltersArray[i] && value === true) {
                return dm;
              }
            }
          })
        );
      }
    } else {
      setOriginalDms();
      let dayFiltersArray = availabilityFilters.days;
      let filtersArray = categoryFilters.categories;
      for (let i = 0; i < filtersArray.length; i++) {
        setSearchedDms((prevState) =>
          prevState.filter((dm) => {
            for (const [key, value] of Object.entries(dm.categoryType)) {
              if (key === filtersArray[i] && value === true) {
                return dm;
              }
            }
          })
        );
      }
      for (let i = 0; i < dayFiltersArray.length; i++) {
        setSearchedDms((prevState) =>
          prevState.filter((dm) => {
            for (const [key, value] of Object.entries(dm.availability)) {
              if (key === dayFiltersArray[i] && value === true) {
                return dm;
              }
            }
          })
        );
      }
    }
  }, [categoryFilters.categories, availabilityFilters.days]);


  return (
    <>
      <DmSearch handleSearch={handleSearch} />
      <div className="row">
        <div className="col s12 offset-m2 m8 offset-l1 l4 content-border">
          <div className="row">
            <div className="col s12">
              <h4>Category:</h4>
              <DmCategoryCheckbox
                handleFilters={(filters) =>
                  handleFilters(filters, "categories")
                }
              />
                
              <div className="col s12">
                <h4>Availability:</h4>
              </div>
              <DmAvailabilityCheckbox
                handleDayFilters={(dayFilters) =>
                  handleDayFilters(dayFilters, "days")
                }
              />
            </div>
          </div>
        </div>

        <div className="col s12 m12 l6 content-border">
          <h5>Matched Games:</h5>
          {searchedDms.map((dm) => (
            <Dmaster
              key={dm._id}
              userName={dm.userName}
              tagLine={dm.tagLine}
              id={dm._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DmDirectory;
