import React from "react";
import BarbarianImg from "../assets/AvatarImages/Barbarian.png";
import BardImg from "../assets/AvatarImages/Bard.png";
import ClericImg from "../assets/AvatarImages/Cleric.png";
import DruidImg from "../assets/AvatarImages/Druid.png";
import FighterImg from "../assets/AvatarImages/Fighter.png";
import MonkImg from "../assets/AvatarImages/Monk.png";
import PaladinImg from "../assets/AvatarImages/Paladin.png";
import RangerImg from "../assets/AvatarImages/Ranger.png";
import RogueImg from "../assets/AvatarImages/Rogue.png";
import SorcererImg from "../assets/AvatarImages/Sorcerer.png";
import WarlockImg from "../assets/AvatarImages/Warlock.png";
import WizardImg from "../assets/AvatarImages/Wizard.png";

const AvatarImage = ({ preferredRole }) => {
  return (
    <>
      {preferredRole === "Barbarian" ? (
        <img
          className="center-align content-border image-true img"
          src={BarbarianImg}
        />
      ) : null}

      {preferredRole === "Bard" ? (
        <img
          className="center-align content-border image-true img"
          src={BardImg}
        />
      ) : null}
      {preferredRole === "Cleric" ? (
        <img
          className="center-align content-border image-true img"
          src={ClericImg}
        />
      ) : null}
     
      {preferredRole === "Druid" ? (
        <img
          className="center-align content-border image-true img"
          src={DruidImg}
        />
      ) : null}

      {preferredRole === "Fighter" ? (
        <img
          className="center-align content-border image-true img"
          src={FighterImg}
        />
      ) : null}

      {preferredRole === "Monk" ? (
        <img
          className="center-align content-border image-true img"
          src={MonkImg}
        />
      ) : null}

      {preferredRole === "Paladin" ? (
        <img
          className="center-align content-border image-true img"
          src={PaladinImg}
        />
      ) : null}

      {preferredRole === "Ranger" ? (
        <img
          className="center-align content-border image-true img"
          src={RangerImg}
        />
      ) : null}

      {preferredRole === "Rogue" ? (
        <img
          className="center-align content-border image-true img"
          src={RogueImg}
        />
      ) : null}

      {preferredRole === "Sorcerer" ? (
        <img
          className="center-align content-border image-true img"
          src={SorcererImg}
        />
      ) : null}

      {preferredRole === "Warlock" ? (
        <img
          className="center-align content-border image-true img"
          src={WarlockImg}
        />
      ) : null}

      {preferredRole === "Wizard" ? (
        <img
          className="center-align content-border image-true img"
          src={WizardImg}
        />
      ) : null}
      </>
  );
};

export default AvatarImage;

              // {preferredRole === "Cleric" ?
//   /* <img
// className="center-align content-border image-true img"
// src={ClericImg}  /> : null}

// {formObject.preferredRole === "Druid" ? 
// <img
// className="center-align content-border image-true img"
// src={DruidImg}  /> : null}

