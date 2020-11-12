import React from "react";
import BarbarianImg from "../assets/imgs200x200/Barbarian.png";
import BardImg from "../assets/imgs200x200/Bard.png";
import ClericImg from "../assets/imgs200x200/Cleric.png";
import DruidImg from "../assets/imgs200x200/Druid.png";
import FighterImg from "../assets/imgs200x200/Fighter.png";
import MonkImg from "../assets/imgs200x200/Monk.png";
import PaladinImg from "../assets/imgs200x200/Paladin.png";
import RangerImg from "../assets/imgs200x200/Ranger.png";
import RogueImg from "../assets/imgs200x200/Rogue.png";
import SorcererImg from "../assets/imgs200x200/Sorcerer.png";
import WarlockImg from "../assets/imgs200x200/Warlock.png";
import WizardImg from "../assets/imgs200x200/Wizard.png";
import dmImage from "../assets/imgs200x200/dmImage.png"

const AvatarImage = ({ preferredRole }) => {
  return (
    <>

      {preferredRole === "Barbarian" ? (
        <img
          className="center-align content-border img"
          src={BarbarianImg}
        />
      ) : null}

      {preferredRole === "Bard" ? (
        <img
          className="center-align content-border img"
          src={BardImg}
        />
      ) : null}
      {preferredRole === "Cleric" ? (
        <img
          className="center-align content-border img"
          src={ClericImg}
        />
      ) : null}
     
      {preferredRole === "Druid" ? (
        <img
          className="center-align content-border img"
          src={DruidImg}
        />
      ) : null}

      {preferredRole === "Fighter" ? (
        <img
          className="center-align content-border img"
          src={FighterImg}
        />
      ) : null}

      {preferredRole === "Monk" ? (
        <img
          className="center-align content-border img"
          src={MonkImg}
        />
      ) : null}

      {preferredRole === "Paladin" ? (
        <img
          className="center-align content-border img"
          src={PaladinImg}
        />
      ) : null}

      {preferredRole === "Ranger" ? (
        <img
          className="center-align content-border img"
          src={RangerImg}
        />
      ) : null}

      {preferredRole === "Rogue" ? (
        <img
          className="center-align content-border img"
          src={RogueImg}
        />
      ) : null}

      {preferredRole === "Sorcerer" ? (
        <img
          className="center-align content-border img"
          src={SorcererImg}
        />
      ) : null}

      {preferredRole === "Warlock" ? (
        <img
          className="center-align content-border img"
          src={WarlockImg}
        />
      ) : null}

      {preferredRole === "Wizard" ? (
        <img
          className="center-align content-border img"
          src={WizardImg}
        />
      ) : null}

      {!preferredRole ? ( 
      <img src={dmImage} alt="" /> )
      :  null}
      </>
  );
};

export default AvatarImage;


