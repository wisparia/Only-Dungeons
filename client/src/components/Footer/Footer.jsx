import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import BookButton from "../BookButton/BookButton";

const footer = () => {
    return (
        <>
          <footer className="page-footer">
          <div className="container">
            <div className="row">
            <div className="col s12 l1">
                <BookButton />
              </div>
             
              <div className="col s12 l6">
                <p>It's dangerous to go alone.</p>
              </div>
              <div className="col s12 l3 offset-l2">

                <Link className="btn" to="/Team">Meet the Team</Link>
                <Link className="btn" to="/ThreeD/1">3-D Scene</Link>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">
            © 2020 Black Phosphorous
            </div>
          </div>
        </footer>
        </>
    );
};

export default footer;