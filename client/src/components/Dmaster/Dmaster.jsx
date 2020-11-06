import React from "react";
import PlaceHolderImg from "./placeholder200x200.jpg";

const Dmaster = () => {
  return (
    <>
      <div className="card row">
        <img
          src={PlaceHolderImg}
          alt=""
          className="col s2"
          style={{ width: "80px" }}
        />
        <h5 className="col s4">DM Name</h5>
        <p className="col s6">Here is a cool tagline</p>
      </div>
    </>
  );
};

export default Dmaster;
