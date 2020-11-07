import React, { useEffect, useState, } from "react";
import { useParams } from "react-router-dom"
import placeholderImg from "./placeholder200x200.jpg";
import API from "../../utils/API"


function DmUpdateForm() {
  
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
 

  useEffect(async()=>{
    const response = await API.getUser(id)
    console.log(response.data)
    setDm(response.data)
    // .then((res)=> {
    //   console.log(res.data.categoryType.campaigns)
    //   setDm(res.data)})
    // .catch((err)=> console.log(err, "Could not reach page"))
  },[])

  return (
    <>
      <div className="container">
        <div className="row section"></div>

        <form className="row section content-border">
          <div className="row vertical-spacer-md">
            <div className="col s6">
            <p>Room Name: </p>
              <div className="content-border">
                <input id="roomName" className="validate" type="text" value={dm.roomName} placeholder={dm.roomName}/>
              </div>

            <p>Tagline: </p>
              <div className="content-border">
                <input id="Tagline" type="text" className="validate" value={dm.tagLine} placeholder={dm.tagLine} />
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

              <p>Preferred Role: </p>
              <div className="content-border">
                <select className="browser-default">
                  <option value="" disabled selected>
                    Select
                  </option>
                  {dm.prefferedRole === "Barbarian" ? <option selected value="Barbarian">Barbarian</option> : <option value="Barbarian">Barbarian</option>}
                  {dm.prefferedRole === "Bard" ? <option selected value="Bard">Bard</option> : <option value="Bard">Bard</option>}
                  {dm.prefferedRole === "Cleric" ? <option selected value="Cleric">Cleric</option> : <option value="Cleric">Cleric</option>}
                  {dm.prefferedRole === "Druid" ? <option selected value="Druid">Druid</option> : <option value="Druid">Druid</option>}
                  {dm.prefferedRole === "Fighter" ? <option selected value="Fighter">Fighter</option> : <option value="Fighter">Fighter</option>}
                  {dm.prefferedRole === "Monk" ? <option selected value="Monk">Monk</option> : <option value="Monk">Monk</option>}
                  {dm.prefferedRole === "Paladin" ? <option selected value="Paladin">Paladin</option> : <option value="Paladin">Paladin</option>}
                  {dm.prefferedRole === "Ranger" ? <option selected value="Ranger">Ranger</option> : <option value="Ranger">Ranger</option>}
                  {dm.prefferedRole === "Rogue" ? <option selected value="Rogue">Rogue</option> : <option value="Rogue">Rogue</option>}
                  {dm.prefferedRole === "Sorcerer" ? <option selected value="Sorcerer">Sorcerer</option> : <option value="Sorcerer">Sorcerer</option>}
                  {dm.prefferedRole === "Warlock" ? <option selected value="Warlock">Warlock</option> : <option value="Warlock">Warlock</option>}
                  {dm.prefferedRole === "Wizard" ? <option selected value="Wizard">Wizard</option> : <option value="Wizard">Wizard</option>}
                </select>
              </div>
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
                    {dm.categoryType.campaigns ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    {dm.categoryType.oneshots ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>oneshots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {dm.categoryType.homebrew ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>homebrew</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                  {dm.categoryType.byTheBook ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>byTheBook</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {dm.categoryType.rpersonly ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>rpersonly</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {dm.categoryType.norestriction ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>norestriction</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                  {dm.categoryType.displaydice ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>displaydice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {dm.categoryType.lvl1only ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>lvl1only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {dm.categoryType.voyuerallowed ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                    <span>
                      <p>voyuerallowed</p>
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
                    {dm.availability.monday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Monday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      {dm.availability.tuesday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Tuesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                    {dm.availability.wednesday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Wednesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                    {dm.availability.thursday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
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
                    {dm.availability.friday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                    {dm.availability.saturday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Saturday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                    {dm.availability.sunday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Sunday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>
              <div className="row vertical-spacer-sm">
                <div className="col s4 "></div>
                <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Cancel
                </button>
                <div className="col s1 "></div>
                <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Create Account
                </button>
                <div className="col s1 "></div>
              </div>
            </div>
          </div>
        </form>


      <h5>Delete Your Account?</h5>

      </div>
    </>
  );
}

export default DmUpdateForm;
