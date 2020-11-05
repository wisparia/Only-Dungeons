import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import SigninPage from "./containers/SigninPage/SigninPage"
import NewUser1 from "./containers/NewUser1/NewUser1"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route exact path ="/" component={SigninPage} />
        <Route exact path ="/newuser" component={NewUser1} />
        </Switch>
        </Router>
        
    </div>
  );
}

export default App;
