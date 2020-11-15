import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const footer = () => {
    return (
        <>
            <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <p>It's dangerous to go alone.</p>
              </div>
              <div className="col l4 offset-l2 s12">

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