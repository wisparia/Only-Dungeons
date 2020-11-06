import React from "react";
import Dmaster from "../../components/Dmaster/Dmaster"

function DmDirectory() {
  return (
    <>
      <div className="container">
        <form className="content-border">
          <input type="text" />
          <input
            className="vertical-spacer-sm waves-effect waves-light btn"
            type="submit"
          />
        </form>
      </div>

      <div className="row">
        <div className="col s3 content-border">
          <div className="row">
            <div className="col s12">
              <h5>Category:</h5>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>oneshots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>homebrew</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>byTheBook</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>rpersonly</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>norestriction</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>displaydice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>lvl1only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>voyuerallowed</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
              <h5>Availability:</h5>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Monday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Tuesday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Wednesday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Thursday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Friday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Saturday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
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
          </div>
        </div>

        <div className="col s9 content-border">
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
                    <Dmaster />
    
    
            </div>
      </div>
    </>
  );
}

export default DmDirectory;
