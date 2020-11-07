import React, { useState, useEffect } from "react";
import PlaceholderImg from "./placeholder200x200.jpg";
import {useParams} from "react-router-dom";
import axios from "axios";

// 5fa5f19368d9ef88e44c7a10

function DmOne() {
  const [dmObj, setDmObject] = useState({
    userName: "",
    email: "",
    roomName: "",
    tagLine: ""
  })

  const {userId} = useParams()

  // useEffect(() =>  {
  //   axios
  //   .get(`api/users/${userId}`)
  //   .then((response) => {
  //     console.log(response.data)
  //   })
  //   .catch((err) => {
  //   console.log(err)
  //   })
  //   }, [])


 
  // function loadDm() {
  //   API.getUser(userId)
  //   .then(res => setDmObject(res.data))
  //   .catch(err => console.log(err))
  // }



  return (
    <>
      <div className="content-border container">
        <h5>Tagline</h5>
      </div>
      <div>
        <div className="container content-border row">
          <div className="col s4">
            <img src={PlaceholderImg} alt="" />
            <h5>username</h5>
            <div className="row">
              <div className="btn col s8 m8 l8">Email</div>
              <div className="btn col s8">Back</div>
            </div>
          </div>
          <div className="col s8">
          <div className="row">
    
            <div className="col s6">
            <div className="row">
            <div className="col s12"></div>
          
              <h5>Category:</h5>
              <div className="col s12">
            
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>campaigns</p>
                    </span>
                  </label>
             
              </div>
              <div className="col s12">

                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>oneshots</p>
                    </span>
                  </label>
     
              </div>
              <div className="col s12">
      
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>homebrew</p>
                    </span>
                  </label>
          
              </div>
              <div className="col s12">
     
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>byTheBook</p>
                    </span>
                  </label>
            
              </div>
              <div className="col s12">
        
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>rpersonly</p>
                    </span>
                  </label>
     
              </div>
              <div className="col s12">
     
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>norestriction</p>
                    </span>
                  </label>

              </div>
              <div className="col s12">
                          <label>
                    <input type="checkbox" />
                    <span>
                      <p>displaydice</p>
                    </span>
                  </label>
      
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>lvl1only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>voyuerallowed</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>
            </div>


            <div className="row">
                <div className="col s6">
                <div className="col s12">
              <h5>Availability:</h5>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Monday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Tuesday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Wednesday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Thursday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Friday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Saturday</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>Sunday</p>
                    </span>
                  </label>
                </p>
              </div>



                </div>
            </div>
            
            

            
          </div>
          </div>

        
        </div>
      </div>
    </>
  );
}

export default DmOne;
