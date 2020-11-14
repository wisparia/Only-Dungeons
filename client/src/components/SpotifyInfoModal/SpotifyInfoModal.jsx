import React, { Component } from "react";
import "./SpotifyInfoModal.css";

class NoCreateModal extends Component {
  render() {
    const { handleClose, show2 } = this.props;
    const showHideClassName = show2 ? "display-block" : "display-none";
    console.log(this.props);
    return (
      <div className={showHideClassName}>
        <div id="NoCreateModal" className="NoCreateModal">
          <div className="modal-content">
            <div className="modal-header center">
              <h4>Failed to Create Account</h4>
            </div>
            <div className="modal-body center">
              <p>
                Tutorials for Spotify
              </p>
              <button
                to="/"
                onClick={handleClose}
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

export default NoCreateModal;
