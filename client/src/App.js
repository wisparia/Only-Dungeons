import "./App.css";
import { useState, useContext, useEffect } from "react";
import UserContext from "./utils/UserContext";
import Navbar from "./components/Navbar/Navbar";
import SigninPage from "./containers/SigninPage/SigninPage";
import NewUser1 from "./containers/NewUser1/NewUser1";
import DmForm from "./containers/DmForm/DmForm";
import PcForm from "./containers/PcForm/PcForm";
import DmDirectory from "./containers/DmDirectory/DmDirectory";
import DmOne from "./containers/DmOne/DmOne";
import UpdateForm from "./containers/UpdateForm/UpdateForm";
import ThreeD from "./containers/ThreeD/ThreeD";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import "materialize-css";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import Footer from "./components/Footer/Footer";
import Audio from "./components/Audio/Audio";
// import { Button, Card, Row, Col } from "react-materialize";

function App() {
  const [jwt, setJwt] = useState();
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const localJwt = localStorage.getItem("jwt");
    if (localJwt) {
      setJwt(localJwt);
    }
  });

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
      localStorage.setItem("jwt", jwt);
    }
  });

  return (
    <div className="App">
<<<<<<< HEAD
      <Audio />
=======
>>>>>>> main
      <UserContext.Provider value={{ userId, setUserId }}>
        <Router>
          <AuthContext.Provider value={{ jwt, setJwt }}>
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <SigninPage user={user} setUser={setUser} />}
              />
              <Route exact path="/NewUser" component={NewUser1} />
              <Route exact path="/PcForm/:id" component={PcForm} />
              <Route exact path="/DmForm/:id" component={DmForm} />
              <Route
                exact
                path="/DmDirectory"
                render={() => <DmDirectory user={user} />}
              />
              <Route exact path="/DmOne/:id" component={DmOne} />
              <Route exact path="/UpdateForm/:id" component={UpdateForm} />
              <Route exact path="/ThreeD/:id" component={ThreeD} />
              <Route path="/" component={SigninPage} />
            </Switch>
          </AuthContext.Provider>
<<<<<<< HEAD
          <Footer />
=======
>>>>>>> main
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
