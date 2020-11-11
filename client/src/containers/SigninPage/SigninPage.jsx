import React, { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API";
import { setAxiosDefaults } from "../../utils/axiosDefaults";
// imports AuthContext from the axios defaults
import AuthContext from "../../context/AuthContext"

function SigninPage() {

  const history = useHistory();
  const [returnUserObj, setReturnUserObject] = useState({
    email: "",
    password: "",
  });

  const {jwt, setJwt} = useContext(AuthContext)

  const { userId, setUserId } = useContext(UserContext);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setReturnUserObject({ ...returnUserObj, [name]: value });
  }

  const handleFormSubmit = (e) => {
    console.log("Click")
    e.preventDefault();
    API.loginUser({
      email: returnUserObj.email.trim(),
      password: returnUserObj.password.trim(),
    }).then((result) => {
      console.log(result.data)
      console.log(result.data.data);

      const tokenToStore = result.data.data;

      if (result.data.data) {
        localStorage.setItem("jwt", tokenToStore);

        const localToken = localStorage.getItem("jwt")
        // console.log(localToken)
        setJwt(localToken)
        console.log({jwt})
      }
      
      // setNewUserObject(result)
      // console.log(result.data.user)
      const userID = result.data.user._id
      // // console.log(userID)
      setUserId(userID)
      history.push(`/DmDirectory`)
    });
  };

  return (
    <>
    <div className="container section">
      <div className="row section"></div>
      <div className="row section"></div>
      <div className="row section">
        <div className="col s11 l5 content-border mainbox">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="col s12">
                <label htmlFor="email">
                    <p className="form-text">Email</p>
                  </label>
                  <input id="username" type="text" class="validate" onChange={(e) => {
                    console.log("value", e.target.value)
                    const newUser = {...props.user}
                    newUser.userName = e.target.value
                    console.log('newUser', newUser)
                    props.setUser(newUser)
                  }} />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                <label htmlFor="password">
                    <p className="form-text">Password</p>
                  </label>
                  <input id="password" onChange={handleInputChange} name="password" value={returnUserObj.password} type="password" className="validate" />
                </div>
              </div>
              
              <div className="row">
                <div className="col s2"></div>
                <Link button className="vertical-spacer-sm waves-effect waves-light btn col s8" to = "/NewUser">
                  New Account
                </Link>
                <div className="col s2"></div>
              </div>

              <div className="row">
                <div className="col s2"></div>
              {/* <button onChange={handleFormSubmit} type="button" className="vertical-spacer-sm waves-effect waves-light btn col s8">
                Login
              </button> */}
              <div
                  className="vertical-spacer-md waves-effect waves-light btn col s6"
                  disabled={!(returnUserObj.password && returnUserObj.email)}
                  onClick={handleFormSubmit}
                >
                  Login
                </div>
              <div className="col s2"></div>
              </div>
            </form>
          </div>
        </div>

        <div className="col s12 l6 content-border center mainbox">
          <h4>Welcome to Only Dungeons!</h4>
          <p>A place where you can find other people to play tabletop RPGs with depending on waht fits your style or your availibility. You can be a player, or a DM, so login or create an account to start matching with other nerds.</p><br/><p>Have Fun!</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default SigninPage;
