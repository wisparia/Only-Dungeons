/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import dmImage from "./dmImage.png";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import AvatarImage from "../../components/AvatarImage/AvatarImage"

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
    discordServer: ""
  });

  const { id } = useParams();
  const ServerID = dm.discordServer;
  const serverURL =  "https://titanembeds.com/embed/" + ServerID + "?css=183&username=Explorer";
  const defaultServerURL = "https://titanembeds.com/embed/776249613778026577?css=183&username=Explorer";
  const SpotifyID = dm.getSpotify;
  const spotifyURL = "https://open.spotify.com/embed/playlist/" + SpotifyID
  const defaultSpotifyURL = "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2MKTk6";

  useEffect(async () => {
    const response = await API.getUser(id);
    console.log(response.data);
    const ServerID = dm.discordServer;
    console.log(dm.discordServer);
    console.log(serverURL);
    setDm(response.data);
  }, []);

  return (
    <>
      <div className="container center tagline">
        <h5>{dm.tagLine}</h5>
      </div>
      <div>
        <div className="container content-border row">
          <div className="col s12 m12 l4 center vertical-spacer-sm">
            <AvatarImage dmImage={dmImage}  preferredRole = {dm.preferredRole} />
            <h5 className="vertical-spacer-sm">{dm.userName}</h5>
            <div className="row center">
              <a className="col s12 btn vertical-spacer-sm" href={`mailto:${dm.email}`}>
                Email
              </a>
              <div className="btn col s12">Back</div>
              {dm.getSpotify === "" || dm.getSpotify === undefined ? <iframe src={defaultSpotifyURL} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> : <iframe src={spotifyURL} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>}
            </div>
          </div>
          <div className="col s12 m8">
            <div className="row">
              <div className="col s12 l12 xl6">
                  <h5 className="vertical-spacer-md ">Category:</h5>
                  <label className="col s12">
                      {dm.categoryType.campaigns ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>Campaigns</p>
                      </span>
                    </label>
                    <label className="col s12">
                      {dm.categoryType.oneshots ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>One Shots</p>
                      </span>
                    </label>
                    <label className="col s12">
                      {dm.categoryType.homebrew ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>HomeBrew</p>
                      </span>
                    </label>
                    <label className="col s12">
                      {dm.categoryType.byTheBook ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>By The Book</p>
                      </span>
                    </label>
                    <label className="col s12">
                      {dm.categoryType.rpersonly ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>Role Play Only</p>
                      </span>
                    </label>
                    <label className="col s12">
                      {dm.categoryType.norestriction ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>No Restriction</p>
                      </span>
                    </label>
                    <label className="col s12">
                      {dm.categoryType.displaydice ? (
                        <input checked="checked" type="checkbox" />
                      ) : (
                        <input type="checkbox" disabled />
                      )}
                      <span>
                        <p>Display Dice</p>
                      </span>
                    </label>
                    <label className="col s12">
                        {dm.categoryType.lvl1only ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Lvl One Only</p>
                        </span>
                      </label>
                      <label className="col s12">
                        {dm.categoryType.voyuerallowed ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Watchers Allowed</p>
                        </span>
                      </label>
                </div>

              <div className="row">
                <div className="col s12 l12 xl6">
                    <h5 className="vertical-spacer-md">Availability:</h5>
                      <label className="col s12">
                        {dm.availability.monday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Monday</p>
                        </span>
                      </label>
                      <label className="col s12">
                        {dm.availability.tuesday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Tuesday</p>
                        </span>
                      </label>
                      <label className="col s12">
                        {dm.availability.wednesday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Wednesday</p>
                        </span>
                      </label>
                      <label className="col s12">
                        {dm.availability.thursday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Thursday</p>
                        </span>
                      </label>
                      <label className="col s12">
                        {dm.availability.friday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Friday</p>
                        </span>
                      </label>
                      <label className="col s12">
                        {dm.availability.saturday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Saturday</p>
                        </span>
                      </label>
                      <label className="col s12">
                        {dm.availability.sunday ? (
                          <input checked="checked" type="checkbox" />
                        ) : (
                          <input type="checkbox" disabled />
                        )}
                        <span>
                          <p>Sunday</p>
                        </span>
                      </label>
                </div>
              </div></div></div>
              {dm.discordServer === "" || dm.discordServer === undefined ? <iframe src={defaultServerURL} height="600" width="100%" frameborder="0" className="chatBorder"></iframe> : <iframe src={serverURL} height="600" width="100%" frameborder="0" className="chatBorder"></iframe>}
            
          
        </div>
      </div>
    </>
  );
}

export default DmOne;
