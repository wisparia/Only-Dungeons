import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SigninPage from "./containers/SigninPage/SigninPage";
import NewUser1 from "./containers/NewUser1/NewUser1";
import DmForm from "./containers/DmForm/DmForm";
import PcForm from "./containers/PcForm/PcForm";
import DmDirectory from "./containers/DmDirectory/DmDirectory";
import DmOne from "./containers/DmOne/DmOne";
import DmUpdateForm from "./containers/DmUpdateForm/DmUpdateForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css";
// import { Button, Card, Row, Col } from "react-materialize";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SigninPage} />
          <Route exact path="/NewUser" component={NewUser1} />
          <Route exact path="/PcForm/:id" component={PcForm} />
          <Route exact path="/DmForm/:id" component={DmForm} />
          <Route exact path="/DmDirectory" component={DmDirectory} />
<<<<<<< HEAD
          <Route exact path="/DmOne/:id" component={DmOne} />
          <Route exact path="/DmUpdateForm/:id" component={DmUpdateForm} />
          <Route path="/" component={SigninPage} />
=======
          <Route exact path="/DmOne" component={DmOne} />
          <Route exact path="/DmUpdateForm/:name" component={DmUpdateForm} />
>>>>>>> 4282a37a49b50ca9bce0e121e2fe21d74dcecde1
        </Switch>
      </Router>
    </div>
  );
}

export default App;
