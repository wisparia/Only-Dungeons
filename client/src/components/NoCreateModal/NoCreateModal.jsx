import React, { Component } from "react";
import "./nocreatemodal.css";

class NoCreateModal extends Component {
  render() {
    const { handleClose, show2 } = this.props;
    const showHideClassName = show2 ? "display-block" : "display-none";
    console.log(this.props);
    return (
      <div className={showHideClassName}>
        <div id="NoCreateModal" className="NoCreateModal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={handleClose}>
                ×
              </span>
              <h2>Failed to Create Account</h2>
            </div>
            <div className="modal-body">
              <p>
                Sorry, we weren't able to create your account. Please try again!
              </p>
              <button
                to="/"
                onClick={handleClose}
                className="vertical-spacer-sm waves-effect waves-light btn col s3"
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
