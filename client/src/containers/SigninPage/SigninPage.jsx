import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API";
import AuthContext from "../../context/AuthContext"
import NoUserModal from "../../components/NoUserModal/NoUserModal"


function SigninPage(props) {

  const history = useHistory();
  const [show2, setShow2] = useState(false)
  const [returnUserObj, setReturnUserObject] = useState({
    email: "",
    password: "",
  });

  function clearStorage (){
    localStorage.removeItem("jwt")
  }

  const showModal2 = () => {
    setShow2(true);
  };
 
  const hideModal2 = () => {
    setShow2(false );
  };

  useEffect(()=>{
    clearStorage();
  }, [])

  const {jwt, setJwt} = useContext(AuthContext)

  //eslint-disable-next-line
  const { userId, setUserId } = useContext(UserContext);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setReturnUserObject({ ...returnUserObj, [name]: value });
  }

  const handleFormSubmit = (e) => {
    hideModal2()
    localStorage.removeItem("jwt");
    console.log("Click")
    e.preventDefault();
    API.loginUser({
      email: returnUserObj.email.trim(),
      password: returnUserObj.password.trim(),
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
        const userID = result.data.user._id
        setUserId(userID)
        history.push(`/DmDirectory`)
      }
      
    });
  };

  return (
    <>
    <div className="container">
      <div className="row s12">
        <div className="col s12 m12 l5 xl5 content-border mainbox">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="col s12">
                <label htmlFor="email">
                    <p className="form-text">Email</p>
                  </label>

                <input id="email" onChange={handleInputChange} value={returnUserObj.email}  name="email"
                type="email" className="validate" />
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
                <Link className=" btn col s12" to = "/NewUser">
                  New Account
                </Link>
              </div>

              <div className="row">
              <div
                  className=" btn col s12"
                  disabled={!(returnUserObj.password && returnUserObj.email)}
                  onClick={handleFormSubmit}
                >
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col s12 m12 l6 xl6 content-border center mainbox">
          <h4>Welcome to Only Dungeons!</h4>
          <p>A place where you can find other people to play tabletop RPGs with depending on 
            what fits your style or your availibility. You can be a player, or a DM, so login 
            or create an account to start matching with other nerds.</p><br/><p>Have Fun!</p>
        </div>
      </div>
    </div>
    <NoUserModal show2={show2} handleClose ={hideModal2}/>
    </>
  );
}

export default SigninPage;
