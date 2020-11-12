import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import placeholderImg from "./placeholder200x200.jpg";
import API from "../../utils/API"
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import UpdateModal from "../../components/UpdateModal/UpdateModal";
import AuthContext from "../../context/AuthContext";




// TODO: Make sure to grab value from dropdown
// TODO: Think about ways to dry up those functions
// TODO: Make a put request with the formObject 

function DmUpdateForm() {

  const userAuthContext = useContext(AuthContext)

  // const [jwt, setJwt] = useState();

  // useEffect(() => {
  //   const localJwt = localStorage.getItem("jwt");
  //   if (localJwt) {
  //     setJwt(localJwt);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (jwt) {
  //     setAxiosDefaults(jwt);
  //     localStorage.setItem("jwt", jwt);
  //   }
  // },[jwt]);

  const history = useHistory()
  const {id} = useParams()
const [show, setShow] = useState(false)
const [show2, setShow2] = useState(false)
  const [dm, setDm] = useState({
    userName: "",
    password: "",
    email: "",
    isDm: false,
    roomName: "",
    tagLine: "",
    categoryType:{
      byTheBook: false,
      campaigns: false,
      norestriction: false,
      homebrew: false,
      lvl1only: false,
      rpersonly: false,
      oneshots: false,
      displaydice: false,
      voyuerallowed: false
    },
    availability:{
      monday: false,
      tuesday: false, 
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    preferredRole: ""
  });

  const [formObject, setFormObject] = useState({
    userName: "",
    password: "",
    email: "",
    isDm: true,
    roomName: "",
    tagLine: "",
    categoryType:{
      byTheBook: false,
      campaigns: false,
      norestriction: false,
      homebrew: false,
      lvl1only: false, 
      rpersonly: false,
      oneshots: false,
      displaydice: false,
      voyuerallowed: false
    },
    availability:{
      monday: false,
      tuesday: false, 
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    preferredRole: ""

  })
  const showModal = () => {
    setShow(true);
  };
 
  const hideModal = () => {
    setShow(false );
  };

  function handleDeleteAccount(event){
    hideModal()
    event.preventDefault()
    const userId = id
    window.location.replace("/")
    API.deleteUser(userId)
    .then(console.log("Your journey has ended..."))
    
  }
  
  
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleDropDownChange(e){
    console.log(e.target.value)
    let selectedRole = e.target.value
    setFormObject({...formObject, preferredRole: selectedRole})
  }
  
  // UPDATING USER
  const showModal2 = () => {
    setShow2(true);
  };
 
  const hideModal2 = () => {
    setShow2(false );
  };

  function handleFormSubmit(event) {
    hideModal2();
    event.preventDefault();
      API.updateUser(id, {
        roomName: formObject.roomName,
        tagLine: formObject.tagLine,
        preferredRole: formObject.preferredRole,
        categoryType:{
          byTheBook: formObject.categoryType.byTheBook,
          campaigns: formObject.categoryType.campaigns,
          norestriction: formObject.categoryType.norestriction,
          homebrew: formObject.categoryType.homebrew,
          lvl1only: formObject.categoryType.lvl1only,
          rpersonly: formObject.categoryType.rpersonly,
          oneshots: formObject.categoryType.oneshots,
          displaydice: formObject.categoryType.displaydice,
          voyuerallowed: formObject.categoryType.voyuerallowed
        },
        availability:{
          monday: formObject.availability.monday,
          tuesday: formObject.availability.tuesday, 
          wednesday: formObject.availability.wednesday,
          thursday: formObject.availability.thursday,
          friday: formObject.availability.friday,
          saturday: formObject.availability.saturday,
          sunday: formObject.availability.sunday
        },
        preferredRole: formObject.preferredRole
      })
      .then((response)=>{
        console.log(response.data)
      })
      .catch((err)=> console.error(err))
  
  };



  useEffect(()=>{
    async function renderUserDetails(){
    const response = await API.getUser(id)
    console.log(response.data)
    setDm(response.data)
    setFormObject({
      categoryType:{
        byTheBook: response.data.categoryType.byTheBook,
        campaigns: response.data.categoryType.campaigns,
        norestriction: response.data.categoryType.norestriction,
        homebrew: response.data.categoryType.homebrew,
        lvl1only: response.data.categoryType.lvl1only,
        rpersonly: response.data.categoryType.rpersonly,
        oneshots: response.data.categoryType.oneshots,
        displaydice: response.data.categoryType.displaydice,
        voyuerallowed: response.data.categoryType.voyuerallowed
      },
      availability:{
        monday: response.data.availability.monday,
        tuesday: response.data.availability.tuesday, 
        wednesday: response.data.availability.wednesday,
        thursday: response.data.availability.thursday,
        friday: response.data.availability.friday,
        saturday: response.data.availability.saturday,
        sunday: response.data.availability.sunday
      },
      preferredRole: response.data.preferredRole
    })
    }
    renderUserDetails()
  },[])


  function handleCheckbox(event, objKey){
    event.stopPropagation()
    let current = formObject[objKey][event.target.name]
    console.log(current)
    setFormObject(prevState=>({
      ...prevState,
      [objKey]: {
        ...prevState[objKey], [event.target.name]: !current
      }
    }))

  }

  return (
   
    <>
      <div className="container">
        <div className="row section"></div>
        <form className="row section content-border">
          <div className="row vertical-spacer-md">

            <div className="col s12 l5 center-align">
                <p>Avatar:</p>
                <img
                  className="center-align content-border image-true img"
                  src={placeholderImg}
                />
              </div>

            <div className="col s12 l7">

            {dm.isDm ? <>
              <p>Room Name: </p>
              <div className="content-border">
              <input id="roomName" className="validate" type="text" value={formObject.roomName} name="roomName" placeholder={dm.roomName} onChange={handleInputChange}/>
              </div>
            </> : null}
            <p>Tagline: </p>
              <div className="content-border">
                <input id="Tagline" type="text" className="validate" value={formObject.tagLine} name="tagLine" placeholder={dm.tagLine} onChange={handleInputChange} />
              </div>
            

            {!dm.isDm ? <> <p>Preferred Role: </p>
            <div className="content-border">
              <select className="browser-default" onChange={handleDropDownChange}>
                <option value="" disabled selected> 
                  Select
                </option>
                {dm.preferredRole === "Barbarian" ? <option selected name="preferredRole" value="Barbarian">Barbarian</option> : <option name="preferredRole" value="Barbarian">Barbarian</option>}
                {dm.preferredRole === "Bard" ? <option selected name="preferredRole" value="Bard">Bard</option> : <option name="preferredRole" value="Bard">Bard</option>}
                {dm.preferredRole === "Cleric" ? <option selected name="preferredRole" value="Cleric">Cleric</option> : <option name="preferredRole" value="Cleric">Cleric</option>}
                {dm.preferredRole === "Druid" ? <option selected name="preferredRole" value="Druid">Druid</option> : <option name="preferredRole" value="Druid">Druid</option>}
                {dm.preferredRole === "Fighter" ? <option selected name="preferredRole" value="Fighter">Fighter</option> : <option name="preferredRole" value="Fighter">Fighter</option>}
                {dm.preferredRole === "Monk" ? <option selected name="preferredRole" value="Monk">Monk</option> : <option name="preferredRole" value="Monk">Monk</option>}
                {dm.preferredRole === "Paladin" ? <option selected name="preferredRole" value="Paladin">Paladin</option> : <option name="preferredRole" value="Paladin">Paladin</option>}
                {dm.preferredRole === "Ranger" ? <option selected name="preferredRole" value="Ranger">Ranger</option> : <option name="preferredRole" value="Ranger">Ranger</option>}
                {dm.preferredRole === "Rogue" ? <option selected name="preferredRole" value="Rogue">Rogue</option> : <option name="preferredRole" value="Rogue">Rogue</option>}
                {dm.preferredRole === "Sorcerer" ? <option selected name="preferredRole" value="Sorcerer">Sorcerer</option> : <option name="preferredRole" value="Sorcerer">Sorcerer</option>}
                {dm.preferredRole === "Warlock" ? <option selected name="preferredRole" value="Warlock">Warlock</option> : <option name="preferredRole" value="Warlock">Warlock</option>}
                {dm.preferredRole === "Wizard" ? <option selected name="preferredRole" value="Wizard">Wizard</option> : <option name="preferredRole" value="Wizard">Wizard</option>}
              </select>
            </div> </> : null}
            </div></div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Category:</h5>
            </div>

            <div className="row">
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" checked={formObject.categoryType.campaigns} name="campaigns" value={formObject.categoryType.campaigns} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>Campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                    <input type="checkbox" checked={formObject.categoryType.oneshots} name="oneshots" value={formObject.categoryType.oneshots} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>One Shots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                  <input type="checkbox" checked={formObject.categoryType.homebrew} name="homebrew" value={formObject.categoryType.homebrew} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>HomeBrew</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m6 l4">
                <p>
                  <label>
                  <input type="checkbox" checked={formObject.categoryType.byTheBook} name="byTheBook" value={formObject.categoryType.byTheBook} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>By The Book</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                  <input type="checkbox" checked={formObject.categoryType.rpersonly} name="rpersonly" value={formObject.categoryType.rpersonly} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>Role Play Only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                  <input type="checkbox" checked={formObject.categoryType.norestriction} name="norestriction" value={formObject.categoryType.norestriction} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>No Restriction</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m6 l4">
                <p>
                  <label>
                  <input type="checkbox" checked={formObject.categoryType.displaydice} name="displaydice" value={formObject.categoryType.displaydice} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>Display Dice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                  <input type="checkbox" checked={formObject.categoryType.lvl1only} name="lvl1only" value={formObject.categoryType.lvl1only} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>Lvl One Only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12 m6 l4">
                <p>
                  <label>
                  <input type="checkbox" checked={formObject.categoryType.voyuerallowed} name="voyuerallowed" value={formObject.categoryType.voyuerallowed} onChange={(e) => handleCheckbox(e, "categoryType")}/>
                    <span>
                    <p>Watchers Allowed</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Availability:</h5>
              <div className="row">
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                    <input type="checkbox" checked={formObject.availability.monday} name="monday" value={formObject.availability.monday} onChange={(e) => handleCheckbox(e, "availability")}/>
                      <span>
                        <p>Monday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                      <input type="checkbox" checked={formObject.availability.tuesday} name="tuesday" value={formObject.availability.tuesday} onChange={(e) => handleCheckbox(e, "availability")}/>
                      <span>
                        <p>Tuesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                    <input type="checkbox" checked={formObject.availability.wednesday} name="wednesday" value={formObject.availability.wednesday} onChange={(e) => handleCheckbox(e, "availability")}/>
                      <span>
                        <p>Wednesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                    <input type="checkbox" checked={formObject.availability.thursday} name="thursday" value={formObject.availability.thursday} onChange={(e) => handleCheckbox(e, "availability")}/>
                      <span>
                        <p>Thursday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                    <input type="checkbox" checked={formObject.availability.friday} name="friday" value={formObject.availability.friday} onChange={(e) => handleCheckbox(e, "availability")}/>
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                    <input type="checkbox" checked={formObject.availability.saturday} name="saturday" value={formObject.availability.saturday} onChange={(e) => handleCheckbox(e, "availability")}/>
                      <span>
                        <p>Saturday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6 l3">
                  <p>
                    <label>
                    <input type="checkbox" checked={formObject.availability.sunday} name="sunday" value={formObject.availability.sunday} onChange={(e) => handleCheckbox(e, "availability")}/>
                      <span>
                        <p>Sunday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div> 
              <div className="row vertical-spacer-sm">
              <div className="col s12 m12 l4">
                <button className="vertical-spacer-sm waves-effect waves-light btn col s12">
                  Cancel
                </button></div>
                <div className="col s12 m12 l4">
                <button type = "button"  onClick={showModal}  className="vertical-spacer-sm waves-effect waves-light btn col s12">
                 Delete Your Account?
                </button></div>
                <div className="col s12 m12 l4">
                <button type="button" onClick={showModal2} className="vertical-spacer-sm waves-effect waves-light btn col s12">
                  Update Account
                </button></div>
              </div>
          </div>
          </div> 
        </form>
      </div>
            <UpdateModal show2 = {show2} handleFormSubmit = {handleFormSubmit} handleClose ={hideModal2}/>
            <DeleteModal show = {show} handleDeleteAccount = {handleDeleteAccount} handleClose ={hideModal}/>
    </>
  );
}

export default DmUpdateForm;
