import React from "react";
import "./nouser.css";

function NoUserModal () {
    const { handleClose, show2 } = this.props;
    const showHideClassName = show2 ? "display-block" : "display-none";
    return (
      <div className={showHideClassName}>
        <div id="NoUserModal" className="NoUModal">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Failed Sign In</h4>
            </div>
            <div className="modal-body">
              <p>
                Sorry, we weren't able to sign you in. Please try again!
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


export default NoUserModal;
