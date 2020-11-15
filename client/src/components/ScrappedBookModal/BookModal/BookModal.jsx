import React, { Component, useContext } from "react";
import "../BookModal/BookModal.css";
import ClassTypeContext from "../../context/ClassTypeContext";

class BookModal extends Component {

  
  render() {

    const classTypes = ClassTypeContext;
    const { handleClose, show, handleFormSubmit} = this.props;
    const showHideClassName = show ? "display-block" : "display-none";
    console.log(classTypes.ClassTypeState);

    return (
      <div className={showHideClassName}>
        
        <div id="BookModal" className="BookModal center">
        <button
                to="#"
                onClick=""
                className="booktabs vertical-spacer-sm col s1"
              >
                Spells
              </button>
              <button
                to="#"
                onClick=""
                className="booktabs vertical-spacer-sm col s1"
              >
                Monster
              </button>
              <button
                to="#"
                onClick=""
                className="booktabs vertical-spacer-sm col s1"
              >
                Races
              </button>
              <button
                to="#"
                onClick=""
                className="booktabs vertical-spacer-sm col s1"
              >
                Classes
              </button>
              <button
                to="#"
                onClick=""
                className="booktabs vertical-spacer-sm col s1"
              >
                Equipment
              </button>
              <button
                to="#"
                onClick=""
                className="booktabs vertical-spacer-sm col s1"
              >
                Armor
              </button>
          <div className="book-content center">
            <div>
            </div>
            <button
                to="#"
                onClick={handleClose}
                className="CloseBook vertical-spacer-sm col s1"
              >
                X
              </button>
            <div className="modal-body">
              <div class="row">
              <div className="col s12 m6">
<p className="booktext">Hello</p>
<button
                to="#"
                onClick=""
                className="pageDown vertical-spacer-sm col s2"
              >
                Down
              </button>
              </div>
              <div className="col s12 m6">
<p className="booktext">Hello 2</p>
<button
                to="#"
                onClick=""
                className="pagingUp vertical-spacer-sm col s2"
              >
                Up
              </button>
              </div>
            </div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookModal;

