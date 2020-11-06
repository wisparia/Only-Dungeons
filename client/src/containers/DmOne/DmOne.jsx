import React from 'react';
import PlaceholderImg from "./placeholder200x200.jpg"

function DmOne() {
    return (
        <>
        <div className="content-border container">
            <h4>Tagline</h4></div>
        <div>
            <div className="container">
            <img src={PlaceholderImg} alt=""/>
            <h4>username</h4>
            <div className="row">
                 <div className="btn col s12 m12 l12">Email</div>
                  <div className="btn col s12">Back</div>
            </div>
           
           
            </div>
        </div>
        </>
    );
};

export default DmOne;