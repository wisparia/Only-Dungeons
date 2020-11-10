import React from 'react';
import "./DmSearch.css";

const DmSearch = ({handleSearch}) => {

  
    return (
        <div className="searchBox container">
        <div className="row"></div>
        <div className="col offset-s2 s12">
          Search
          <input onChange={(event) => handleSearch(event)} />
        </div>
      </div>
    );
};

export default DmSearch;