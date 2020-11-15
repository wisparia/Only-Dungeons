import React, { Component } from "react";
import "./discordmodal.css";

class DiscordModal extends Component {
  render() {
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
                Check out the video below for instructions on how to link your
                discord account below!
              </p>
              <div className="modal-content center">
                <iframe
                  src="https://drive.google.com/file/d/1oavuzXjX3-WgoXlLYnQZ1Bu4J1fkLqFk/preview"
                  width="480"
                  height="480"
                ></iframe>
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
}

export default DiscordModal;
