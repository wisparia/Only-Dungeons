// import { load } from "npm";
import React, { useEffect, useState } from "react";
import Dmaster from "../../components/Dmaster/Dmaster";
import DmSearch from "../../components/DmSearch/DmSearch";
import API from "../../utils/API";

function DmDirectory() {
  const [allDms, setDms] = useState([]);
  const [searchedDms, setSearchedDms] = useState([]);

  useEffect(() => {
    const loaded = loadDMs();
  }, []);

  function loadDMs() {
    API.getDms()
      .then((res) => {
        setDms(res.data)
        setSearchedDms(res.data)
      })
      .catch((err) => console.log(err));
  }
  
 function setOriginalDms() {
    setSearchedDms(allDms)
  }


function handleSearch(event) {
    let searchedDm =  event.target.value;
    if (searchedDm === "") {
      console.log("nothing to see here")
      setOriginalDms()
    } else {
      setSearchedDms(searchedDms.filter((dm) => {
        return dm.userName.indexOf(searchedDm) !== -1
      }))
      console.log(searchedDms)
    }
}

  return (
    <>
      <DmSearch handleSearch={handleSearch} />

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
          {allDms.map((dm) => (
            <Dmaster
              key={dm.userName}
              userName={dm.userName}
              tagLine={dm.tagLine}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DmDirectory;
