import "./App.css";
import { useState, useEffect, useContext } from "react";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar/Navbar";
import SigninPage from "./containers/SigninPage/SigninPage";
import NewUser1 from "./containers/NewUser1/NewUser1";
import Team from "./containers/Team/Team";
import DmDirectory from "./containers/DmDirectory/DmDirectory";
import DmOne from "./containers/DmOne/DmOne";
import UpdateForm from "./containers/UpdateForm/UpdateForm";
import ThreeD from "./containers/ThreeD/ThreeD";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import "materialize-css";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SpellContext from "./context/Spellcontext"
import MonsterContext from "./context/MonsterContext"

import API from "./utils/API"
// import Spellbook from "./containers/SpellBook/Spellbook";
// import { MonsterBook } from "./containers/MonsterBook/MonsterBook";
// import { BookOfSpells } from "./containers/BookOfSpells/BookOfSpells";
// import { RaceBook } from "./containers/SpellBookRace/SpellBookRace";
// import { ClassesBook } from "./containers/SpellBookClasses/SpellBookClasses";
// import { WpnBook } from "./containers/SpellBookWpn/SpellBookWpn";
// import { ArmorBook } from "./containers/SpellbookArmor/SpellBookArmor";

function App() {
  const [jwt, setJwt] = useState();
  const [userId, setUserId] = useState("");

  const [spells, setSpells] = useState()
  const [monsters, setMonsters] = useState()

  useEffect(() => {
    const localJwt = localStorage.getItem("jwt");
    if (localJwt) {
      setJwt(localJwt);
    }
  }, []);

  useEffect(()=>{

    API.getSpells().then((res)=>{
      console.log(res.data)
      let spellArray = res.data
      setSpells(spellArray)
    })

    API.getMonsters().then((res)=>{
      console.log(res.data.data.results)
      let monsterArray = res.data.data.results
      setMonsters(monsterArray)
    })

  },[])

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
      localStorage.setItem("jwt", jwt);
    }
  }, [jwt]);

  

  return (
    <div className="App">
      <UserContext.Provider value={{ userId, setUserId }}>
        <Router>
          <AuthContext.Provider value={{ jwt, setJwt }}>
            <SpellContext.Provider value = {{spells, setSpells}}>
              <MonsterContext.Provider value = {{spells, setSpells}}>
            <Navbar />
            <Switch>
              {/* <Route
                exact
                path="/"
                render={() => <SigninPage user={user} setUser={setUser} />}
              /> */}
              <Route exact path="/NewUser" component={NewUser1} />
              {/*<Route
                exact
                path="/DmDirectory"
                render={() => <DmDirectory user={user} />}
              /> */}
              <Route exact path="/DmDirectory" component={DmDirectory} />

              <Route exact path="/DmOne/:id" component={DmOne} />
              <ProtectedRoute
                exact
                path="/UpdateForm/:id"
                component={UpdateForm}
              />
              <Route exact path="/ThreeD/:id" component={ThreeD} />

              <Route exact path="/Team" component={Team} />

              {/* section for spellbook */}
              {/* 
              <Route exact path="/Spellbook/" component={Spellbook} />
              <Route exact path="/testpage" component={MonsterBook} />
              <Route exact path="/spelltest" component={BookOfSpells} />
              <Route exact path="/racetest" component={RaceBook} />
              <Route exact path="/classestest" component={ClassesBook} />
              <Route exact path="/wpntest" component={WpnBook} />
              <Route exact path="/armortest" component={ArmorBook} /> */}
              <Route path="/" component={SigninPage} />
            </Switch>
            </MonsterContext.Provider>
            </SpellContext.Provider>
          </AuthContext.Provider>

          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjI2NTFjZDQyMjRmNTgxZWE4NDYiLCJlbWFpbCI6ImVzdGVydGVzdGVyMDAwQGdtYWlsLmNvbSIsImlhdCI6MTYwNTExNjY0MX0.OyX_qJTe5JTxjRtxf7lDPteNsYOo6RMwY0GPzPS-Y_g
