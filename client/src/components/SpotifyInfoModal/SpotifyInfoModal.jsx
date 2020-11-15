import React from "react";
import "./SpotifyInfoModal.css";

function SpotifyInfoModal () {
    const { hideModalSpotify, showModalSpotify } = this.props;
    const showHideClassName = showModalSpotify
      ? "display-block"
      : "display-none";
    console.log(this.props);
    return (
      <div className={showHideClassName}>
        <div id="showModalSpotify" className="showModalSpotify">
          <div className="modal-content">
            <div className="modal-header center">
              <h4>Link Your Spotify Account to Only Dungeons</h4>
            </div>
            <div className="modal-body center">
              <p>
                Check out the video below for instructions on how to link your
                discord account below!
              </p>
              <div className="modal-content center">
                <h1>VIDEO WILL GO HERE!</h1>
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


export default SpotifyInfoModal;
