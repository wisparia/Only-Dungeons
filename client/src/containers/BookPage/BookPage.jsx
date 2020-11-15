import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API";
import AuthContext from "../../context/AuthContext"


function BookPage() {

  return (
    <>
    <div className="container">
      <div className="row s12">
        <div className="col s12 m12 l6 xl6 content-border center mainbox">
          <h4>Content</h4>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ullam obcaecati dolores, dignissimos deserunt aliquam quas odit rem hic! Ab voluptatibus aperiam, quos vitae amet sed deserunt molestiae voluptate laudantium.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default BookPage;
