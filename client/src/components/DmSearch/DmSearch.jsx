import React from 'react';

const DmSearch = ({handleSearch}) => {

  
    return (
        <div className="container">
        <div className="row"></div>
        <div className="col s12">
          Search
          <input onChange={(event) => handleSearch(event)} />
        </div>
      </div>
    );
};

export default DmSearch;