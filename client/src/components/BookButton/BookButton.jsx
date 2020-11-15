import React, { useEffect, useState } from "react";
import BookModal from "../BookModal/BookModal"
import "./BookButton.css";
import dndlogo from "../assets/dndlogotiny.png";

function BookButton() {

    const [show, setShow] = useState(false)

    const showModal = () => {
      setShow(true);
    };
   
    const hideModal = () => {
      setShow(false);
    };
  
    function handleBook(event) {
      hideModal();
      // event.preventDefault();
  }

    return (
      <>
          <form>
            <div>
                <button className="BookTab" type = "button"  onClick={showModal}>
                 <img src={dndlogo}/>
                </button>
                </div>
                </form>
        <BookModal show = {show} handleBook = {handleBook} handleClose ={hideModal}/>
        </>
    );
};

export default BookButton;