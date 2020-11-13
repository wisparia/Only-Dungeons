import React, { Component } from "react";
import "../UpdateModal/UpdateModal.css";

class UpdateModal extends Component {
  render() {
    const { handleClose, show2, handleFormSubmit} = this.props;
    const showHideClassName = show2 ? "display-block" : "display-none";
    console.log(this.props);
    return (
      <div className={showHideClassName}>
        <div id="UpdateModal" className="UModal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={handleClose}>
                ×
              </span>
              <h2>Update Account</h2>
            </div>
            <div className="modal-body">
              <p>
                Ready to update your account? These changes will be saved automatically, but can be modifed at any time!
              </p>
              <button
                to="/"
                onClick={handleFormSubmit}
                className="vertical-spacer-sm waves-effect waves-light btn col s3"
              >
                Update Your Account?
              </button>
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

export default UpdateModal;
