import React, { Component } from 'react';
import "../DeleteModal/DeleteModal.css"

class DeleteModal extends Component {
    render() {
		const { handleClose, show, handleDeleteAccount } = this.props
		const showHideClassName = show ? 'display-block' : 'display-none';
      return (
      	<div className={showHideClassName}>
      	   <div id="DeleteModal" className="DModal">
 
			  <div className="modal-content">
			    <div className="modal-header center">

			      <h4>Delete Account</h4>
			    </div>
          <div className="modal-body center
          "> 
                    <p>Quitting never gets you anywhere in life! Are you sure you want to delete you account?</p> 
                <button to="/" onClick={handleDeleteAccount}  className="vertical-spacer-sm waves-effect waves-light btn col s6">
                 Delete Your Account?</button>
                 <button to="/" onClick={handleClose}  className="vertical-spacer-sm waves-effect waves-light btn col s6">
                 Cancel</button>
                 
                </div>
                </div>
                </div>
                </div>
	  );
    }	
}


export default DeleteModal;