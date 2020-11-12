import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { setAxiosDefaults } from "../../utils/axiosDefaults";
import AuthContext from "../../context/AuthContext"
import NoCreateModal from "../../components/NoCreateModal/NoCreateModal"


function NewUser1() {
  const history = useHistory();
  const [newUserObj, setNewUserObject] = useState({
    _id: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isDm: false,
  });

  const {jwt, setJwt} = useContext(AuthContext)

  const [show2, setShow2] = useState(false)

  const { userId, setUserId } = useContext(UserContext);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUserObject({ ...newUserObj, [name]: value });
  }

  const showModal2 = () => {
    setShow2(true);
  };
 
  const hideModal2 = () => {
    setShow2(false );
  };

  function handleRadioChange(event) {
    const { value } = event.target;
    setNewUserObject({ ...newUserObj, isDm: value === "1" ? true : false });
  }

  const handleFormSubmit = (e) => {
    hideModal2()
    localStorage.removeItem("jwt")
    e.preventDefault();
    API.saveUser({
      userName: newUserObj.userName,
      email: newUserObj.email,
      password: newUserObj.password,
      isDm: newUserObj.isDm,
    }).then((result) => {
      if(!result.data.data){
        showModal2()
      }
      console.log(result.data)
      console.log(result.data.data);
      const tokenToStore = result.data.data;

      if (result.data.data) {
        localStorage.setItem("jwt", tokenToStore);

        const assignToken = async function(){
          const localToken = localStorage.getItem("jwt")
          await setJwt(localToken)
          console.log({jwt})
        }
        
        assignToken()
        console.log(result.data.user)
        const userID = result.data.user._id
      // console.log(userID)
        setUserId(userID)
        history.push(`/UpdateForm/${userID}`)
      }
      
      // setNewUserObject(result)
      
    });
  };

  // test for jwts creating the key within the newUser1

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   API.saveUser({
  //     userName: newUserObj.userName,
  //     email: newUserObj.email,
  //     password: newUserObj.password,
  //     isDm: newUserObj.isDm,
  //   })
  //     .then((result) => {
  //       console.log(result)
  //       // setNewUserObject(result)
  //       // const userID = result.data
  //       // console.log(userID)
  //       // setUserId(userID)
  //       // history.push(`/UpdateForm/${userID}`)
  //     });
  // };

  return (
    <>
      <div className="container mainbox"></div>
      <div className="row section"></div>
      <form className="row section content-border mainbox">
        <div className="col s12 l6">
          <div className="row">
            <div className="col s12">
              <label htmlFor="username">
                <p className="form-text">Username</p>
              </label>
              <input
                id="userName"
                type="text"
                className="validate"
                name="userName"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <label htmlFor="email">
                <p className="form-text">Email</p>
              </label>
              <input
                onChange={handleInputChange}
                name="email"
                value={newUserObj.email}
                id="email"
                type="email"
                className="validate"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <label htmlFor="password">
                <p className="form-text">Password</p>
              </label>
              <input
                onChange={handleInputChange}
                name="password"
                value={newUserObj.password}
                id="password"
                type="password"
                className="validate"
              />
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <label htmlFor="password">
                <p className="form-text">Confirm Password</p>
              </label>
              <input
                onChange={handleInputChange}
                name="confirmPassword"
                value={newUserObj.confirmPassword}
                id="confirmPassword"
                type="password"
                className="validate"
              />
            </div>
          </div>
        </div>


        <div className="col s12 l6 vertical-spacer-md center">
          <p>Do you tell the stories or do you live them?</p>
          <div className="row">
            <div className="col s5">
              <div className="vertical-spacer-sm">
                <label>
                  <input
                    name="isDm"
                    type="radio"
                    value="1"
                    onClick={handleRadioChange}
                  />
                  <span>
                    <p> Dungeon Master</p>
                  </span>
                </label>
              </div>
            </div>
            <div className="col s5">
              <div className="vertical-spacer-sm center-align">
                <label>
                  <input
                    name="isDm"
                    type="radio"
                    onClick={handleRadioChange}
                    value="0"
                  />
                  <span>
                    <p> Player Character </p>
                  </span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align vertical-spacer-md">
                <div
                  className=" vertical-spacer-md waves-effect waves-light btn col s6"
                  to="/"
                >
                  Cancel
                </div>
                <div
                  className="vertical-spacer-md waves-effect waves-light btn col s6"
                  disabled={!(newUserObj.password && newUserObj.email)}
                  onClick={handleFormSubmit}
                >
                  Create Account
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <NoCreateModal show2={show2} handleClose ={hideModal2}/>
    </>
  );
}
// test build
export default NewUser1;
