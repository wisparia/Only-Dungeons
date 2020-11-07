import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function NewUser1() {
  const [newUserObj, setNewUserObject] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isDm: null,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUserObject({ ...newUserObj, [name]: value });
  }

  function handleRadioChange(event) {
    const {name, value} = event.target;
    setNewUserObject({...newUserObj, 
      [name]: value ? true : false});
  }


  function handleFormSubmit(event) {
    event.preventDefault();
    if (newUserObj.userName && newUserObj.password) {
      API.saveUser({
        userName: newUserObj.userName,
        email: newUserObj.email,
        password: newUserObj.password,
        isDm: newUserObj.isDm,
      })
        .then(() =>
          setNewUserObject({
            userName: "",
            email: "",
            password: "",
            isDm: null,
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <div className="container"></div>
      <div className="row section"></div>
      <form className="row section content-border">
        <div className="col s6">
          <div className="row">
            <div className="col s12">
              <label htmlFor="username">
                <p className="form-text">Username</p>
              </label>
              <input id="userName" type="text" className="validate" name="userName" onChange={handleInputChange}/>
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
              id="confirmPassword" type="password" className="validate" />
            </div>
          </div>
        </div>

        <div className="col s6 vertical-spacer-md">
          <p>Do you tell the stories or do you live them?</p>
          <div className="row">
            <div className="col s1"></div>
            <div className="col s5">
              <div className="vertical-spacer-sm">
                <label>
                  <input name="isDm" type="radio" value={1} checked onChange={handleRadioChange} />
                  <span>
                   <p> Dungeon Master</p>
                  </span>
                </label>
              </div>
            </div>
            <div className="col s5">
              <div className="vertical-spacer-sm">
                <label>
                  <input name="isDm" type="radio" onChange={handleRadioChange}  value={0} />
                  <span>
                    <p> Player Character </p>
                  </span>
                </label>
              </div>
            </div>

            <div className="row vertical-spacer-md">
              <div className="col s4 "></div>
              <div
                className="vertical-spacer-md waves-effect waves-light btn col s3"
                to="/"
              >
                Cancel
              </div>
              <div className="col s1 "></div>
              <div                
                className="vertical-spacer-md waves-effect waves-light btn col s3"
                disabled={!(newUserObj.password && newUserObj.email)}
                onClick={handleFormSubmit}
              >
                Create Account
              </div>
              <div className="col s1 "></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
// test build
export default NewUser1;
