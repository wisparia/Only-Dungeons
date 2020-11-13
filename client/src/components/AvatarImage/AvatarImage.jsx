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
          alt= "Barbarian"

        />
      ) : null}

      {preferredRole === "Bard" ? (
        <img
          className="center-align content-border img"
          src={BardImg}
          alt= "Bard"

        />
      ) : null}
      {preferredRole === "Cleric" ? (
        <img
          className="center-align content-border img"
          src={ClericImg}
          alt= "Cleric"

        />
      ) : null}
     
      {preferredRole === "Druid" ? (
        <img
          className="center-align content-border img"
          src={DruidImg}
          alt= "Druid"

        />
      ) : null}

      {preferredRole === "Fighter" ? (
        <img
          className="center-align content-border img"
          src={FighterImg}
          alt= "Fighter"

        />
      ) : null}

      {preferredRole === "Monk" ? (
        <img
          className="center-align content-border img"
          src={MonkImg}
          alt= "Monk"

        />
      ) : null}

      {preferredRole === "Paladin" ? (
        <img
          className="center-align content-border img"
          src={PaladinImg}
          alt= "Paladin"

        />
      ) : null}

      {preferredRole === "Ranger" ? (
        <img
          className="center-align content-border img"
          src={RangerImg}
          alt= "Ranger"

        />
      ) : null}

      {preferredRole === "Rogue" ? (
        <img
          className="center-align content-border img"
          src={RogueImg}
          alt= "Rogue"

        />
      ) : null}

      {preferredRole === "Sorcerer" ? (
        <img
          className="center-align content-border img"
          src={SorcererImg}
          alt= "Sorcerer"

        />
      ) : null}

      {preferredRole === "Warlock" ? (
        <img
          className="center-align content-border img"
          src={WarlockImg}
          alt= "Warlock"

        />
      ) : null}

      {preferredRole === "Wizard" ? (
        <img
          className="center-align content-border img"
          src={WizardImg}
          alt= "Wizard"

        />
      ) : null}

      {!preferredRole ? ( 
      <img src={dmImage} alt="" /> )
      :  null}
      </>
  );
};

export default AvatarImage;


