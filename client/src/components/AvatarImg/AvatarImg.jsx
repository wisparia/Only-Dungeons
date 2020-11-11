import React from 'react';
import ClericImg from "../AvatarImg/ClericImg"
import DruidImg from "../AvatarImg/DruidImg"
import FighterImg from "../AvatarImg/FighterImg"
import MageImg from "../AvatarImg/MageImg"
import MonkImg from "../AvatarImg/MonkImg"
import PaladinImg from "../AvatarImg/PaladinImg"
import RogueImg from "../AvatarImg/RogueImg"
import WarlockImg from "../AvatarImg/WarlockImg"

const AvatarImg = (preferredRole) => {
    return (
        <div className="col s12 l5 center-align">
        <p>Avatar:</p>
        
        {formObject.preferredRole === "Cleric" ? 
         <img
          className="center-align content-border image-true img"
        src=""  /> : null}
         
         {formObject.preferredRole === "Rogue" ? 
          <img
          className="center-align content-border image-true img"
        src=""  /> : null}
       
      </div>
    );
};

export default AvatarImg;