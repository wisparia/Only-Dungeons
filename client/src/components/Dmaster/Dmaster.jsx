import React from "react";
import { Link } from "react-router-dom";
import PlaceHolderImg from "./placeholder200x200.jpg";
import "./Dmaster.css";
import AvatarImageSmall from "../AvatarImageSmall/AvatarImageSmall";

function Dmaster({ userName, tagLine, id, preferredRole }) {
  return (
    <>
      <Link to={`/dmone/${id}`}>
        <div className="card row">
          <div className="col s2">
            <AvatarImageSmall preferredRole={preferredRole} />
          </div>
          <p className="col s4">{userName}</p>
          <p className="col s6">{tagLine}</p>
        </div>
      </Link>
    </>
  );
}

export default Dmaster;
