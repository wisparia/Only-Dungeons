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
        />
      ) : null}

      {preferredRole === "Bard" ? (
        <img
          src={BardImg}
        />
      ) : null}
      {preferredRole === "Cleric" ? (
        <img
          src={ClericImg}
        />
      ) : null}
     
      {preferredRole === "Druid" ? (
        <img
          src={DruidImg}
        />
      ) : null}

      {preferredRole === "Fighter" ? (
        <img
          src={FighterImg}
        />
      ) : null}

      {preferredRole === "Monk" ? (
        <img
          src={MonkImg}
        />
      ) : null}

      {preferredRole === "Paladin" ? (
        <img
          src={PaladinImg}
        />
      ) : null}

      {preferredRole === "Ranger" ? (
        <img
          src={RangerImg}
        />
      ) : null}

      {preferredRole === "Rogue" ? (
        <img
          src={RogueImg}
        />
      ) : null}

      {preferredRole === "Sorcerer" ? (
        <img
          src={SorcererImg}
        />
      ) : null}

      {preferredRole === "Warlock" ? (
        <img
          src={WarlockImg}
        />
      ) : null}

      {preferredRole === "Wizard" ? (
        <img
          src={WizardImg}
        />
      ) : null}

      {!preferredRole ? ( 
      <img src={dmImage} alt="" /> )
      :  null}
      </>
  );
};

export default AvatarImageSmall;