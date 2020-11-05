import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function NewUser1() {
  return (
    <>
      <Navbar />
      <div class="container"></div>
      <div className="row section"></div>
      <form className="row section content-border">
        <div className="col s6">
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

        <div className="col s6 vertical-spacer-md">
          <p>Do you tell the stories or do you live them?</p>
          <div className="row">
            <div className="col s1"></div>
            <div className="col s5">
              <p className="vertical-spacer-sm">
                <label>
                  <input name="userType" type="radio" />
                  <span>
                    <p> Dungeon Master </p>
                  </span>
                </label>
              </p>
            </div>

            <div className="col s5">
              <p className="vertical-spacer-sm">
                <label>
                  <input name="userType" type="radio" checked/>
                  <span>
                    <p> Player Character </p>
                  </span>
                </label>
              </p>
            </div>

            <div className="row vertical-spacer-md">
                <div className="col s4 "></div>
                <button className="vertical-spacer-md waves-effect waves-light btn col s3">
                  New Account</button>
                  <div className="col s1 "></div>
                <button className="vertical-spacer-md waves-effect waves-light btn col s3">
                Login
              </button>
              <div className="col s1 "></div>

            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default NewUser1;
