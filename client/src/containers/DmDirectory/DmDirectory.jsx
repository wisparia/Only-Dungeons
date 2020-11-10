// import { load } from "npm";
import React, { useEffect, useState } from "react";
import Dmaster from "../../components/Dmaster/Dmaster";
import DmSearch from "../../components/DmSearch/DmSearch";
import DmCategoryCheckbox from "../../components/DmCategoryCheckbox/DmCategoryCheckbox";
import DmAvailabilityCheckbox from "../../components/DmAvailabilityCheckbox/DmAvailabilityCheckbox";
import API from "../../utils/API";

function DmDirectory() {
  const [allDms, setDms] = useState([]);
  // const [filteredDms, setFilteredDms] = useState([]);
  const [searchedDms, setSearchedDms] = useState([]);
  const [categoryFilters, setFilters] = useState({
    categories: [],
  });
  const [availabilityFilters, setAvailabilityFilters] = useState({
    days: [],
  });

  // Address clearing search when something is unselected && being able to use both category & availability filtering.

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

  // useEffect(() => {
  //   if (categoryFilters.categories.length > 0)  {
  //     setUnoriginalDms();
  //     let dayFiltersArray = availabilityFilters.days;
  //     for (let i = 0; i < dayFiltersArray.length; i++) {
  //       setSearchedDms((prevState) =>
  //         prevState.filter((dm) => {
  //           for (const [key, value] of Object.entries(dm.availability)) {
  //             if (key === dayFiltersArray[i] && value === true) {
  //               return dm;
  //             }
  //           }
  //         })
  //       );
  //     }
  // } else {
  //   setOriginalDms();
  //   let dayFiltersArray = availabilityFilters.days;
  //   for (let i = 0; i < dayFiltersArray.length; i++) {
  //     setSearchedDms((prevState) =>
  //       prevState.filter((dm) => {
  //         for (const [key, value] of Object.entries(dm.availability)) {
  //           if (key === dayFiltersArray[i] && value === true) {
  //             return dm;
  //           }
  //         }
  //       })
  //     );
  //   }
  // }
  // }, [availabilityFilters.days]);

  return (
    <>
      <DmSearch handleSearch={handleSearch} />
      <div className="row">
        <div className="col s12 m12 l4 content-border">
          <div className="row">
            <div className="col s6 l12">
              <h5>Category:</h5>
              <DmCategoryCheckbox
                handleFilters={(filters) =>
                  handleFilters(filters, "categories")
                }
              />

              <div className="col s6 l12">
                <h5>Availability:</h5>
              </div>
              <DmAvailabilityCheckbox
                handleDayFilters={(dayFilters) =>
                  handleDayFilters(dayFilters, "days")
                }
              />
            </div>
          </div>
        </div>

        <div className="col s12 m12 l8 content-border">
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
