import React, { Component } from "react";
import "./SpotifyInfoModal.css";
import Instructions from "../assets/4mf3dv.gif";

class SpotifyInfoModal extends Component {
  render() {
    const { hideModalSpotify, showModalSpotify } = this.props;
    const showHideClassName = showModalSpotify
      ? "display-block"
      : "display-none";
    console.log(this.props);
    return (
      <div className={showHideClassName}>
        <div id="showModalSpotify" className="showModalSpotify">
          <div className="modal-content ">
            <div className="modal-header center">
              <h4>Link Your Spotify Account to Only Dungeons</h4>
            </div>
            <div className="modal-body center">
              <p>
                Check out the video below for instructions on how to link your
                discord account below!
              </p>
              <div className="modal-content center">
                <img src={Instructions} alt="tutorial for "/>
              </div>
              <br />
              <div>
                <h5>
                  <ul>
                    <li>*** Go your favorite playlist ***</li>
                    <br />
                    <li>*** Copy the URI link ***</li>
                    <br />
                    <li>*** Input the link into the Spotify box ***</li>
                    <br />
                    <li>*** Click the update button! ***</li>
                  </ul>
                </h5>
              </div>
              <button
                to="/"
                onClick={hideModalSpotify}
                className="vertical-spacer-sm btn col s3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotifyInfoModal;
