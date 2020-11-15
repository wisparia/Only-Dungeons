import React from "react";

const DmProfileCheckbox = ({ name }) => {
  return (
    <label className="col s6">
      <input checked="checked" type="checkbox" />
      <span>
        <p className="small-p">{name}</p>
      </span>
    </label>
  );
};

export default DmProfileCheckbox;
