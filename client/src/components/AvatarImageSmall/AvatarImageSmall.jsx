import React from "react";
import BarbarianImg from "../assets/imgs50x50/Barbarian.png";
import BardImg from "../assets/imgs50x50/Bard.png";
import ClericImg from "../assets/imgs50x50/Cleric.png";
import DruidImg from "../assets/imgs50x50/Druid.png";
import FighterImg from "../assets/imgs50x50/Fighter.png";
import MonkImg from "../assets/imgs50x50/Monk.png";
import PaladinImg from "../assets/imgs50x50/Paladin.png";
import RangerImg from "../assets/imgs50x50/Ranger.png";
import RogueImg from "../assets/imgs50x50/Rogue.png";
import SorcererImg from "../assets/imgs50x50/Sorcerer.png";
import WarlockImg from "../assets/imgs50x50/Warlock.png";
import WizardImg from "../assets/imgs50x50/Wizard.png";
import dmImage from "../assets/imgs50x50/dndImage.png"

const AvatarImageSmall = ({ preferredRole }) => {
  return (
    <>

      {preferredRole === "Barbarian" ? (
        <img
          src={BarbarianImg}
          alt= "Barbarian"
        />
      ) : null}

      {preferredRole === "Bard" ? (
        <img
          src={BardImg}
          alt= "Bard"
        />
      ) : null}
      {preferredRole === "Cleric" ? (
        <img
          src={ClericImg}
          alt= "Cleric"
        />
      ) : null}
     
      {preferredRole === "Druid" ? (
        <img
          src={DruidImg}
          alt= "Druid"
        />
      ) : null}

      {preferredRole === "Fighter" ? (
        <img
          src={FighterImg}
          alt= "Fighter"
        />
      ) : null}

      {preferredRole === "Monk" ? (
        <img
          src={MonkImg}
          alt= "Monk"
        />
      ) : null}

      {preferredRole === "Paladin" ? (
        <img
          src={PaladinImg}
          alt= "Paladin"
        />
      ) : null}

      {preferredRole === "Ranger" ? (
        <img
          src={RangerImg}
          alt= "Ranger"
        />
      ) : null}

      {preferredRole === "Rogue" ? (
        <img
          src={RogueImg}
          alt= "Rouge"
        />
      ) : null}

      {preferredRole === "Sorcerer" ? (
        <img
          src={SorcererImg}
          alt= "Sorcerer"
        />
      ) : null}

      {preferredRole === "Warlock" ? (
        <img
          src={WarlockImg}
          alt= "Warlock"
        />
      ) : null}

      {preferredRole === "Wizard" ? (
        <img
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

export default AvatarImageSmall;