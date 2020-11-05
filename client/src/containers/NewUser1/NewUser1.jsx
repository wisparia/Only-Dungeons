import React from "react";
import Navbar from "../../components/Navbar/Navbar"

function NewUser1() { 
return(
    <>
    <Navbar/>
    <div class="container"></div>
      <div className="row section"></div>
      <form className="row section"> 
        <div className="col s6 content-border">

              <div className="row">
                <div className="col s12">
                <label for="username">
                    <p className="form-text">Username</p>
                  </label>
                  <input id="username" type="text" class="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                <label for="email">
                  <p className="form-text">Email</p>
                  </label>
                  <input id="email" type="email" class="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                <label for="password">
                    <p className="form-text">Password</p>
                  </label>
                  <input id="password" type="password" className="validate" />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                <label for="password">
                    <p className="form-text">Confirm Password</p>
                  </label>
                  <input id="password" type="password" className="validate" />
                </div>
              </div>
        </div>

        <div className="col s6 content-border">
          <p>Do you tell the stories or do you live them?</p>
            <div className="row">
                <div className="col s2"></div>
                <button className="vertical-spacer-sm waves-effect waves-light btn col s8">
                  New Account
                </button>
                <div className="col s2"></div>
              </div>

              <div className="row">
                <div className="col s2"></div>
              <button className="vertical-spacer-sm waves-effect waves-light btn col s8">
                Login
              </button>
              <div className="col s2"></div>
              </div>
        </div>
        </form>
    </>
);
}
export default NewUser1;
