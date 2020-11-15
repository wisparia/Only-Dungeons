import React from "react";
import "./discordmodal.css";

function DiscordModal () {
    const { hideDiscordModal, showDiscord } = this.props;
    const showHideClassName = showDiscord ? "display-block" : "display-none";
    console.log(this.props);
    return (
      <div className={showHideClassName}>
        <div id="DiscordModal" className="DiscordModal">
          <div className="modal-content">
            <div className="modal-header center">
              <h4>Link Your Discord Account to Only Dungeons</h4>
            </div>
            <div className="modal-body center">
              <p>
                Check out the video below for instructions on how to link your discord account below!
              </p>
                <div className="modal-content center">
                    <h1>VIDEO WILL GO HERE!</h1>
                </div>
              <button
                to="/"
                onClick={hideDiscordModal}
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


export default DiscordModal;
