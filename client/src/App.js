import { Router } from "express";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import SigninPage from "./containers/SigninPage/SigninPage"
import {BrowserRouter as Nav, Router, Router, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route exact path ="/" component={SigninPage} />


        </Switch>
        </Router>
        <Navbar />
        
    </div>
  );
}

export default App;
