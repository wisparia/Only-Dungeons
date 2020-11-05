import React from "react";
import placeholderImg from "./placeholder200x200.jpg";

function DmForm() {
  return (
    <>
      <div className="container">
        <div className="row section"></div>

        <form className="row section content-border">
          <div className="row vertical-spacer-md">
            <div className="col s6">
              <label for="username">
                <p className="form-text">Username</p>
              </label>
              <input id="username" type="text" className="validate" />
              <label for="email">
                <p className="form-text">Email</p>
              </label>
              <input id="email" type="email" className="validate" />
            </div>

            <div className="col s6">
              <div>
                <p>Avatar:</p>
                <img className="content-border col s12" src={placeholderImg} />
                <div className="content-border">DROP DOWN</div>
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
                      {" "}
                      <p>Red</p>{" "}
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      {" "}
                      <p>Red</p>{" "}
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      {" "}
                      <p>Red</p>{" "}
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
                      {" "}
                      <p>Red</p>{" "}
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      {" "}
                      <p>Red</p>{" "}
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      {" "}
                      <p>Red</p>{" "}
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
                      {" "}
                      <p>Red</p>{" "}
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      {" "}
                      <p>Red</p>{" "}
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      {" "}
                      <p>Red</p>{" "}
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
                        {" "}
                        <p>Monday</p>{" "}
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        {" "}
                        <p>Tuesday</p>{" "}
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        {" "}
                        <p>Wednesday</p>{" "}
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        {" "}
                        <p>Thursday</p>{" "}
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
                        {" "}
                        <p>Friday</p>{" "}
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        {" "}
                        <p>Saturday</p>{" "}
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>
                        {" "}
                        <p>Sunday</p>{" "}
                      </span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default DmForm;
