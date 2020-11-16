import React from "react";
import Calle from "./Calle.png";
import Canales from "./Canales.png";
import Fleming from "./Fleming.png";
import Sully from "./Sully.png";
import Grandma from "./Grandma.png";

function Team() {

  return (
    <>
    <div className="container">
    <div className="row content-border center mainbox">
        <div className="col s12 m12 l4">
        <img src={Calle} height ="150px" width ="150px"  alt ="gangster grandma"></img>
        <a className="btn col s12 vertical-spacer-sm" href="https://github.com/Napica" 
                role="button">Nathan Calle</a>
          </div>
          <div className="col s12 l8">
          <p>SPELLBOOK, NAVIGATOR </p>
          <p>I am an aspiring web-developer with an eclectic, creative sense. I have begun my new journey as a MERN web dev and I am excited to look to the future.  DM/MtG/Lore/VG enthusiast</p>
        </div></div>

    <div className="row content-border center mainbox">
        <div className="col s12 m12 l4">
        <img src={Canales} height ="150px" width ="150px"  alt ="gangster grandma"></img>
        <a className="btn col s12 vertical-spacer-sm" href="https://github.com/modern-sapien" 
          role="button">Jonathan Canales</a>
          </div>
          <div className="col s12 l8">
          <p>Concept, Wireframes, Search & Filtering, Three JS</p>
          <p>I'm a UX Designer/Researcher & Full Stack Developer focusing on XR development & boostrapping projects with collaborators and investors.</p>
        </div></div>

        <div className="row content-border center mainbox">
        <div className="col s12 m12 l4">
        <img src={Fleming} height ="150px" width ="150px"  alt ="gangster grandma"></img>
        <a className="btn col s12 vertical-spacer-sm" href="https://github.com/ad-fleming" 
          role="button">Alex Fleming</a>
          </div>
          <div className="col s12 l8">
          <p>MVP, User Auth, Models</p>
          <p>I am a recent graduate of the Georgia Tech Coding Bootcamp for Full-Stack Development. I look forward to further developing my skills as a MERN stack developer.</p>
        </div></div>

        <div className="row content-border center mainbox">
        <div className="col s12 m12 l4">
        <img src={Sully}  height ="150px" width ="150px"  alt ="gangster grandma"></img>
        <a className="btn col s12 vertical-spacer-sm" href="https://github.com/SamiSully" 
                role="button">Sami Sully</a>
          </div>
          <div className="col s12 l8">
          <p>CSS, AESETHETICS, CUSTOM GRAPHICS</p>
          <p>A digital artist turned aspiring web designer with a strong passion for creative, interactive, and engaging websites. Always looking to learn more, and create bigger and better things.</p>
        </div></div>

        <div className="row content-border center mainbox">
        <div className="col s12 m12 l4">
          <img src={Grandma} height ="200px" width ="200px"  alt ="gangster grandma"></img>
                <a className="btn col s12 vertical-spacer-sm" href="https://github.com/BrandonWalker88" 
                role="button">Brandon Walker</a>
          </div>
          <div className="col s12 l8">
          <p>I made grandma jokes</p>
          <p>I am a full stack developer currently based in Atlanta, Georgia. I am proficient in: HTML5, CSS, JAVASCRIPT, BOOTSTRAP, JS, NODE, AND MYSQL MONGODB, AND REACT.</p>
        </div></div>



        </div>
    
    
    </>
  );
}

export default Team;
