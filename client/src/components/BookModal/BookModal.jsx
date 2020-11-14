import React, { Component } from "react";
import "./BookModal.css";

class BookModal extends Component {
  render() {
    const { handleClose, show } = this.props;
    const showHideClassName = show ? "display-block" : "display-none";
    return (
      <div className={showHideClassName}>
        <div id="BookModal" className="BModal">
          <div className="modal-content">
            <div className="modal-header">
              <h4>testing book</h4>
            </div>
            <div>
              <p>
                This is a book modal yay
              </p>
              <button
                to="/"
                onClick={handleClose}
                className="vertical-spacer-sm btn col s3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookModal;
