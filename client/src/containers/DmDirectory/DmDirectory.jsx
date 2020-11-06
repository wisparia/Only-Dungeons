import React from 'react';

function DmDirectory() {
    return (
        <>
        <div className="container">
            <form className="content-border">
                <input type="text"/>
                <input className="vertical-spacer-sm waves-effect waves-light btn" type="submit"/>
            </form>
        </div>
        
        <div className="row">
            <div className="col s4">
                <h4>Category</h4>
                                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                
                left side hello</div>
            
            <div className="col s8">right side hello</div>


        </div>
        </>
    );
};

export default DmDirectory;