import React, { useState, useEffect } from "react";
import PlaceholderImg from "./placeholder200x200.jpg";
import { useParams } from "react-router-dom";
import API from "../../utils/API";


import "./DmOne.css";

function DmOne() {
  const [dm, setDm] = useState({
    userName: "",
    email: "",
    roomName: "",
    tagLine: "",
    categoryType: {
      byTheBook: false,
      campaigns: false,
      norestriction: false,
      homebrew: false,
      lvl1only: false,
      rpersonly: false,
      oneshots: false,
      displaydice: false,
      voyuerallowed: false,
    },
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    preferredRole: "",
  });

  const { id } = useParams();

  useEffect(async () => {
    const response = await API.getUser(id);
    console.log(response.data);
    setDm(response.data);
  }, []);

  return (
    <>
      <div className="container center tagline">
        <h5>{dm.tagLine}</h5>
      </div>
      <div>
        <div className="container content-border row">
          <div className="col s12 m12 l4 center">
            <img src={`${dm.preferredRole}Img`} alt="" />
            <h5>{dm.userName}</h5>
            <div className="row center">
              <a className="col s8 m8 l8" href={`mailto:${dm.email}`}>
                Email
              </a>
              <div className="btn col s12">Back</div>
            </div>
          </div>
          <div className="col s12 m8">
            <div className="row">
              <div className="col s12 m12 l6">
                <div className="row">
                  <div className="col s12"></div>

                  <h5>Category:</h5>
                  <div className="col s12">
                    <label>
                      {dm.categoryType.campaigns ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>Campaigns</p>
                      </span>
                    </label>
                  </div>
                  <div className="col s12">
                    <label>
                      {dm.categoryType.oneshots ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>One Shots</p>
                      </span>
                    </label>
                  </div>
                  <div className="col s12">
                    <label>
                      {dm.categoryType.homebrew ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>HomeBrew</p>
                      </span>
                    </label>
                  </div>
                  <div className="col s12">
                    <label>
                      {dm.categoryType.byTheBook ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>By The Book</p>
                      </span>
                    </label>
                  </div>
                  <div className="col s12">
                    <label>
                      {dm.categoryType.rpersonly ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>Role Play Only</p>
                      </span>
                    </label>
                  </div>
                  <div className="col s12">
                    <label>
                      {dm.categoryType.norestriction ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>No Restriction</p>
                      </span>
                    </label>
                  </div>
                  <div className="col s12">
                    <label>
                      {dm.categoryType.displaydice ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>Display Dice</p>
                      </span>
                    </label>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.categoryType.lvl1only ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Lvl One Only</p>
                        </span>
                      </label>
                    </p>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.categoryType.voyuerallowed ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Watchers Allowed</p>
                        </span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="col s12">
                    <h5>Availability:</h5>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.availability.monday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Monday</p>
                        </span>
                      </label>
                    </p>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.availability.tuesday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Tuesday</p>
                        </span>
                      </label>
                    </p>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.availability.wednesday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Wednesday</p>
                        </span>
                      </label>
                    </p>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.availability.thursday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Thursday</p>
                        </span>
                      </label>
                    </p>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.availability.friday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Friday</p>
                        </span>
                      </label>
                    </p>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.availability.saturday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Saturday</p>
                        </span>
                      </label>
                    </p>
                  </div>
                  <div className="col s12">
                    <p>
                      <label>
                        {dm.availability.sunday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Sunday</p>
                        </span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DmOne;
