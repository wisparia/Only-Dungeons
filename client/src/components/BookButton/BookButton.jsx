import React from "react";
import { useHistory } from "react-router-dom";
import "./BookButton.css";
import dndlogo from "../assets/dndlogotiny.png";

function BookButton() {

  const history = useHistory()
  // const [show, setShow] = useState(false)

  //   const showModal = () => {
  //     setShow(true);
  //   };
   
  //   const hideModal = () => {
  //     setShow(false);
  //   };
  
  //   function handleBook(event) {
  //     hideModal();
  //     // event.preventDefault();
  // }
  
    return (
      <>
            <div>
                <button className="BookTab" type = "button"  onClick={()=>history.push("/Book")}>
                 <img src={dndlogo}/>
                </button>
                </div>
        </>
    );
};

export default BookButton;