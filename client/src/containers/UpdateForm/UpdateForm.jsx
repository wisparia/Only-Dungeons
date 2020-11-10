import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom"
import placeholderImg from "./placeholder200x200.jpg";
import API from "../../utils/API"


// TODO: Make sure to grab value from dropdown
// TODO: Think about ways to dry up those functions
// TODO: Make a put request with the formObject 

function DmUpdateForm() {
  const history = useHistory()
  const {id} = useParams()

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

  function handleDeleteAccount(event){
    event.preventDefault()
    const userId = id
    history.push("/")
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
  function handleFormSubmit(event) {
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
          rpersonly: formObject.categoryType.rprsonly,
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



  useEffect(async()=>{
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
  },[])

  // TODO: FIND A WAY TO INJECT EVENT.NAME INSTEAD OF REPEAT THIS NIGHTMARE
  function campaignOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.campaigns
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, campaigns:!current
      }
  }))
  }

  function oneshotsOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.oneshots
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, oneshots:!current
      }
  }))
  }

  // homebrew

  function homebrewOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.homebrew
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, homebrew:!current
      }
  }))
  }


  // byTheBook
  function byTheBookOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.byTheBook
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, byTheBook:!current
      }
  }))
  }

  // rpersonly
  function rpersonlyOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.rpersonly
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, rpersonly:!current
      }
  }))
  }

  // norestriction
  function norestrictionOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.norestriction
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, norestriction:!current
      }
  }))
  }
  
  // displaydice
  function displaydiceOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.displaydice
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, displaydice:!current
      }
  }))
  }


  // lvl1only
  function lvl1onlyOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.lvl1only
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, lvl1only:!current
      }
  }))
  }
  // voyuerallowed
  function voyuerallowedOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.voyuerallowed
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, voyuerallowed:!current
      }
  }))
  }
// ======= END OF CATEGORY CHECK BOX FUNCTIONS============

// ====== START OF AVAILABILITY CHECK BOX FUNCTIONS

// monday
function mondayOnChange(event){
  event.stopPropagation()
  let current = formObject.availability.monday
  // console.log(current)
  setFormObject(prevState => ({
    ...prevState,
    availability: {
        ...prevState.availability, monday:!current
    }
}))
}

// tuesday
function tuesdayOnChange(event){
  event.stopPropagation()
  let current = formObject.availability.tuesday
  // console.log(current)
  setFormObject(prevState => ({
    ...prevState,
    availability: {
        ...prevState.availability, tuesday:!current
    }
}))
}

// wednesday

function wednesdayOnChange(event){
  event.stopPropagation()
  let current = formObject.availability.wednesday
  // console.log(current)
  setFormObject(prevState => ({
    ...prevState,
    availability: {
        ...prevState.availability, wednesday:!current
    }
}))
}

// thursday

function thursdayOnChange(event){
  event.stopPropagation()
  let current = formObject.availability.thursday
  // console.log(current)
  setFormObject(prevState => ({
    ...prevState,
    availability: {
        ...prevState.availability, thursday:!current
    }
}))
}

// friday
function fridayOnChange(event){
  event.stopPropagation()
  let current = formObject.availability.friday
  // console.log(current)
  setFormObject(prevState => ({
    ...prevState,
    availability: {
        ...prevState.availability, friday:!current
    }
}))
}

// saturday
function saturdayOnChange(event){
  event.stopPropagation()
  let current = formObject.availability.saturday
  // console.log(current)
  setFormObject(prevState => ({
    ...prevState,
    availability: {
        ...prevState.availability, saturday:!current
    }
}))
}

// sunday

function sundayOnChange(event){
  event.stopPropagation()
  let current = formObject.availability.sunday
  // console.log(current)
  setFormObject(prevState => ({
    ...prevState,
    availability: {
        ...prevState.availability, sunday:!current
    }
}))
}

// ===== THIS IS THE END OF THE AVAILABILITY CHECKBOX FUNCTIONS=======

  return (
   
    <>
      <div className="container">
        <div className="row section"></div>
        <form className="row section content-border">
          <div className="row vertical-spacer-md">
            <div className="col s6">
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
            </div>

            <div className="col s6">
              <div className="col s12">
                <p>Avatar:</p>
                <img
                  className="content-border col s12 image-true"
                  src={placeholderImg}
                />
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
                {dm.preferredRole === "Monk" ? <option selected name="preferredRole" value="Monk">Monk</option> : <option onChange={handleDropDownChange} name="preferredRole" value="Monk">Monk</option>}
                {dm.preferredRole === "Paladin" ? <option selected name="preferredRole" value="Paladin">Paladin</option> : <option name="preferredRole" value="Paladin">Paladin</option>}
                {dm.preferredRole === "Ranger" ? <option selected name="preferredRole" value="Ranger">Ranger</option> : <option name="preferredRole" value="Ranger">Ranger</option>}
                {dm.preferredRole === "Rogue" ? <option selected name="preferredRole" value="Rogue">Rogue</option> : <option name="preferredRole" value="Rogue">Rogue</option>}
                {dm.preferredRole === "Sorcerer" ? <option selected name="preferredRole" value="Sorcerer">Sorcerer</option> : <option name="preferredRole" value="Sorcerer">Sorcerer</option>}
                {dm.preferredRole === "Warlock" ? <option selected name="preferredRole" value="Warlock">Warlock</option> : <option name="preferredRole" value="Warlock">Warlock</option>}
                {dm.preferredRole === "Wizard" ? <option selected name="preferredRole" value="Wizard">Wizard</option> : <option name="preferredRole" value="Wizard">Wizard</option>}
              </select>
            </div> </> : null}
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Category:</h5>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                    {/* {dm.categoryType.campaigns ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.categoryType.campaigns} name="campaigns" value={formObject.categoryType.campaigns} onChange={campaignOnChange}/>
                    <span>
                    <p>Campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    {/* {dm.categoryType.oneshots ? <input checked="checked" type="checkbox"/> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.categoryType.oneshots} name="oneshots" value={formObject.categoryType.oneshots} onChange={oneshotsOnChange}/>
                    <span>
                    <p>One Shots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.homebrew ? <input checked="checked" type="checkbox"/> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.homebrew} name="homebrew" value={formObject.categoryType.homebrew} onChange={homebrewOnChange}/>
                    <span>
                    <p>HomeBrew</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.byTheBook ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.byTheBook} name="byTheBook" value={formObject.categoryType.byTheBook} onChange={byTheBookOnChange}/>
                    <span>
                    <p>By The Book</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.rpersonly ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.rpersonly} name="rpersonly" value={formObject.categoryType.rpersonly} onChange={rpersonlyOnChange}/>
                    <span>
                    <p>Role Play Only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.norestriction ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.norestriction} name="norestriction" value={formObject.categoryType.norestriction} onChange={norestrictionOnChange}/>
                    <span>
                    <p>No Restriction</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.displaydice ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.displaydice} name="displaydice" value={formObject.categoryType.displaydice} onChange={displaydiceOnChange}/>
                    <span>
                    <p>Display Dice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.lvl1only ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.lvl1only} name="lvl1only" value={formObject.categoryType.lvl1only} onChange={lvl1onlyOnChange}/>
                    <span>
                    <p>Lvl One Only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.voyuerallowed ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.voyuerallowed} name="voyuerallowed" value={formObject.categoryType.voyuerallowed} onChange={voyuerallowedOnChange}/>
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
                <div className="col s3">
                  <p>
                    <label>
                    {/* {dm.availability.monday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.availability.monday} name="monday" value={formObject.availability.monday} onChange={mondayOnChange}/>
                      <span>
                        <p>Monday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      {/* {dm.availability.tuesday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                      <input type="checkbox" checked={formObject.availability.tuesday} name="tuesday" value={formObject.availability.tuesday} onChange={tuesdayOnChange}/>
                      <span>
                        <p>Tuesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                    {/* {dm.availability.wednesday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.availability.wednesday} name="wednesday" value={formObject.availability.wednesday} onChange={wednesdayOnChange}/>
                      <span>
                        <p>Wednesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                    {/* {dm.availability.thursday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.availability.thursday} name="thursday" value={formObject.availability.thursday} onChange={thursdayOnChange}/>
                      <span>
                        <p>Thursday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col s4">
                  <p>
                    <label>
                    {/* {dm.availability.friday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.availability.friday} name="friday" value={formObject.availability.friday} onChange={fridayOnChange}/>
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                    {/* {dm.availability.saturday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.availability.saturday} name="saturday" value={formObject.availability.saturday} onChange={saturdayOnChange}/>
                      <span>
                        <p>Saturday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                    {/* {dm.availability.sunday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.availability.sunday} name="sunday" value={formObject.availability.sunday} onChange={sundayOnChange}/>
                      <span>
                        <p>Sunday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>
              <div className="row vertical-spacer-sm">
                <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Cancel
                </button>
                <div className="col s1 "></div>
                <button to="/" onClick={handleDeleteAccount}  className="vertical-spacer-sm waves-effect waves-light btn col s3">
                 Delete Your Account?
                </button>
                <div className="col s1 "></div>
                <button onClick={handleFormSubmit} className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Update Account
                </button>
                <div className="col s1 "></div>
              </div>
            </div>
          </div>
        </form>
              </div>

      </>
    
  );
}

export default DmUpdateForm;
