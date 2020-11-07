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
          <Route exact path="/DmOne/:id" component={DmOne} />
          <Route exact path="/DmUpdateForm" component={DmUpdateForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
