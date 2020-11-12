import React from "react";
import { Link } from "react-router-dom";
import "./Dmaster.css";
import AvatarImageSmall from "../AvatarImageSmall/AvatarImageSmall";

function Dmaster({ userName, tagLine, id, preferredRole }) {
  return (
    <>
      <Link to={`/dmone/${id}`}>
        <div className="card row">
          <div className="col s2 xl1">
            <AvatarImageSmall preferredRole={preferredRole} />
          </div>
          <p className="col s6 l6 xl3 username">{userName}</p>
          <p className="col l12 offset-xl3 xl5 taglinetext">{tagLine}</p>
        </div>
      </Link>
    </>
  );
}

export default Dmaster;
