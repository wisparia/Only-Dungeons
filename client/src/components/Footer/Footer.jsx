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
              <div className="col s12 l6">
                <p>It's dangerous to go alone.</p>
              </div>
              <div className="col s12 l6">
                <Link className="btn" to="/Book">Nathan's Spellbook of Most Things</Link>
                <Link className="btn" to="/Team">Meet the Team</Link>
                
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