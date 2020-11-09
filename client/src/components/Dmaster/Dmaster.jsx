import React from "react";
import {Link} from "react-router-dom" 
import PlaceHolderImg from "./placeholder200x200.jpg";

function Dmaster({ userName, tagLine, id }) {
  return (
    <>
    <Link to={`/dmone/${id}`} >
      <div className="card row">
        <img
          src={PlaceHolderImg}
          alt=""
          className="col s2"
          style={{ width: "80px" }}
        />
        <p className="col s4">{userName}</p>
        <p className="col s6">{tagLine}</p>
      </div>
      </Link>
    </>
  );
}

export default Dmaster;
