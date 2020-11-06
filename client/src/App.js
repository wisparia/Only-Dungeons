import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SigninPage from "./containers/SigninPage/SigninPage";
import NewUser1 from "./containers/NewUser1/NewUser1";
import DmForm from "./containers/DmForm/DmForm";
import PcForm from "./containers/PcForm/PcForm";
import DmDirectory from "./containers/DmDirectory/DmDirectory";
import DmOne from "./containers/DmOne/DmOne";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SigninPage} />
          <Route exact path="/NewUser" component={NewUser1} />
          <Route exact path="/PcForm" component={PcForm} />
          <Route exact path="/DmForm" component={DmForm} />
          <Route exact path="/DmDirectory" component={DmDirectory} />
          <Route exact path="/DmOne" component={DmOne} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
