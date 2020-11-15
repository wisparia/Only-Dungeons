import React from "react";
import "../UpdateModal/UpdateModal.css";

function UpdateModal () {
    const { handleClose, show2, handleFormSubmit} = this.props;
    const showHideClassName = show2 ? "display-block" : "display-none";
    return (
      <div className={showHideClassName}>
        <div id="UpdateModal" className="UModal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="center">Update Account</h4>
            </div>
            <div className="modal-body">
              <p>
                Ready to update your account? These changes will be saved automatically, but can be modifed at any time!
              </p>
              <button
                to="/"
                onClick={handleFormSubmit}
                className="vertical-spacer-sm btn col s3"
              >
                Update Your Account?
              </button>
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


export default UpdateModal;
