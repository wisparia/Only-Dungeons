import React from "react";
import PlaceHolderImg from "./placeholder200x200.jpg";

function Dmaster({ userName, tagLine }) {
  return (
    <>
      <div className="card row">
        <img
          src={PlaceHolderImg}
          alt=""
          className="col s2"
          style={{ width: "80px" }}
        />
        <h5 className="col s4">{userName}</h5>
        <p className="col s6">{tagLine}</p>
      </div>
    </>
  );
}

export default Dmaster;
