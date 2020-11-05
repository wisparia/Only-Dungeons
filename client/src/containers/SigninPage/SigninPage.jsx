import React from "react";
import Navbar from "../../components/Navbar/Navbar"

function SigninPage() {
  return (
    <div class="container section">
      <div className="row section"></div>
      <div className="row section"></div>
      <div className="row section"></div>
      <div className="row section">
        <div className="col s6 content-border">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="col s12">
                <label for="username">
                    <p className="form-text">Username</p>
                  </label>
                  <input id="username" type="text" class="validate" />

                </div>
              </div>

              <div class="row">
                <div class="col s12">
                <label for="password">
                    <p className="form-text">Password</p>
                  </label>
                  <input id="password" type="password" class="validate" />
                </div>
              </div>
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
            </form>
          </div>
        </div>

        <div className="col s6 content-border">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut fuga iusto voluptatum exercitationem quisquam accusantium porro. Delectus mollitia voluptates dolores praesentium pariatur quaerat quos consectetur iure. Autem, neque accusamus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos eaque quas illo. Enim in odit soluta quam voluptas dolorum quos animi porro totam, maxime inventore voluptatem necessitatibus suscipit. Nam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
