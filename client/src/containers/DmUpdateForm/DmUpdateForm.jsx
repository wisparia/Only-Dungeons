import React from "react";
import placeholderImg from "./placeholder200x200.jpg";

function DmUpdateForm() {
  return (
    <>
      <div className="container">
        <div className="row section"></div>

        <form className="row section content-border">
          <div className="row vertical-spacer-md">
            <div className="col s6">
            <p>Room Name: </p>
              <div className="content-border">
                <input id="roomName" type="text" className="validate" />
              </div>

            <p>Tagline: </p>
              <div className="content-border">
                <input id="Tagline" type="text" className="validate" />
              </div>
            </div>

            <div className="col s6">
              <div className="col s12">
                <p>Avatar:</p>
                <img
                  className="content-border col s12 image-true"
                  src={placeholderImg}
                />
              </div>

              <p>Preferred Role: </p>
              <div className="content-border">
                <select className="browser-default">
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="1">Bard</option>
                  <option value="2">Cleric</option>
                  <option value="3">Fighter</option>
                  <option value="4">Paladin</option>
                  <option value="5">Thief</option>
                  <option value="6">Wizard</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Category:</h5>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>oneshots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
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
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>byTheBook</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>rpersonly</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
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
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>displaydice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>lvl1only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
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
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Monday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Tuesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Wednesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
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
                <div className="col s4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        <p>Saturday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
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
              <div className="row vertical-spacer-sm">
                <div className="col s4 "></div>
                <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Cancel
                </button>
                <div className="col s1 "></div>
                <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Create Account
                </button>
                <div className="col s1 "></div>
              </div>
            </div>
          </div>
        </form>


      <h5>Delete Your Account?</h5>

      </div>
    </>
  );
}

export default DmUpdateForm;
