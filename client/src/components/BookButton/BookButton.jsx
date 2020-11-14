import React, { useEffect, useState } from "react";
import BookModal from "../BookModal/BookModal"

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
      event.preventDefault();
  }

    return (
        <div>
            
            <button type = "button"  onClick={showModal}  className="btn">Book of Smells</button>
            <BookModal show = {show} handleBook = {handleBook} handleClose ={hideModal}/>
        </div>
    );
};

export default BookButton;