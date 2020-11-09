import React from "react";
import { Link } from "react-router-dom"

function SigninPage() {
  return (
    <>
    <div className="container section">
      <div className="row section"></div>
      <div className="row section"></div>
      <div className="row section">
        <div className="col s12 l6 content-border">
          <div className="row">
            <form className="col s12">
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
                <label for="password">
                    <p className="form-text">Password</p>
                  </label>
                  <input id="password" type="password" className="validate" />
                </div>
              </div>
              
              <div className="row">
                <div className="col s2"></div>
                <Link button className="vertical-spacer-sm waves-effect waves-light btn col s8" to = "/NewUser">
                  New Account
                </Link>
                <div className="col s2"></div>
              </div>

              <div className="row">
                <div className="col s2"></div>
              <Link button className="vertical-spacer-sm waves-effect waves-light btn col s8" to = "/DmDirectory">
                Login
              </Link>
              <div className="col s2"></div>
              </div>
            </form>
          </div>
        </div>

        <div className="col s12 l6 content-border center">
          <p>Welcome to Only Dungeons!
          </p><br/><p>A place where you can find other people to play tabletop RPGs with depending on waht fits your style or your availibility. You can be a player, or a DM, so login or create an account to start matching with other nerds.</p><br/><p>Have Fun!</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default SigninPage;
