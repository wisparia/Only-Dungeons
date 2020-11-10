import React from "react";
import placeholderImg from "./placeholder200x200.jpg";
import { Link } from "react-router-dom"
import "./PcForm.css";

function PcForm() {
  return (
    <>
      <div className="container">
        <div className="row section"></div>

        <form className="row section content-border">
          <div className="row vertical-spacer-md">
            <div className="col s12 l6">
              <p>Tagline: </p>
              <div className="mainContent">
                <input id="tagLine" type="text" className="validate" />
              </div>

              <p>Preferred Role: </p>
              <div className="mainContent">
                <select className="browser-default">
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="Barbarian">Barbarian</option>
                  <option value="Bard">Bard</option>
                  <option value="Cleric">Cleric</option>
                  <option value="Druid">Druid</option>
                  <option value="Fighter">Fighter</option>
                  <option value="Monk">Monk</option>
                  <option value="Paladin">Paladin</option>
                  <option value="Ranger">Ranger</option>
                  <option value="Rogue">Rogue</option>
                  <option value="Sorcerer">Sorcerer</option>
                  <option value="Warlock">Warlock</option>
                  <option value="Wizard">Wizard</option>
                </select>
              </div>
            </div>

            <div className="col s12 l6">
              <div className="col s12">
                <p>Avatar:</p>
                <img
                  className="center content-border col s12 image-true img"
                  src={placeholderImg} alt = "placeholder"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Category:</h5>
            </div>

            <div className="row">
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>oneshots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>homebrew</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>byTheBook</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>rpersonly</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>norestriction</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>displaydice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>lvl1only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>voyuerallowed</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>
            {/* this is the end of the checkboxes */}
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Availability:</h5>
              <div className="row">
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Monday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Tuesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Wednesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Thursday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6 l4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Saturday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Sunday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>
              <div className="row vertical-spacer-sm center">
                <div className="col l6 ">
                <Link button className="vertical-spacer-sm waves-effect waves-light btn col s12" to = "/NewUser">
                  Cancel
                </Link></div>
                <div className="col l6">
                <Link button className="vertical-spacer-sm waves-effect waves-light btn col s12" to = "/DmDirectory">
                  Create Account
                </Link>
              </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default PcForm;
