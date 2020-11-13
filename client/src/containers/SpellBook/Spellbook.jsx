import React, { useContext, useEffect, useState } from "react";
import API from "../../utils/SpellBookAPI";
import "./Spellbook.css";

function Spellbook() {
  const [characterClassState, setCharacterClassState] = useState([]);
  const [monsterState, setMonsterState] = useState([]);
  const [raceState, setraceState] = useState([]);
  const [equipmentState, setequipmentState] = useState([]);
  const [spellState, setspellState] = useState([]);
  const [armorState, setarmorState] = useState([]);
  const [weaponState, setweaponState] = useState([]);
  const [rulesState, setrulesState] = useState([]);

  useEffect(() => {
    getClassesArray();
    getMonstersArray();
    getRacesArray();
    getDndEqupArray();
    getDndSpellsArray();
    getDndArmorArray();
    getDndWeaponArray();
    getDndRules();
  }, [raceState]);

  // function dndClassInfo(event) {
  //   let classType = event.target.value;
  //   console.log(event.target.value);

  //   API.getDndInfo(classType)
  //     .then((res) => {
  //       console.log(res.data);
  //       setClassInfo(res.data);
  //       setProficiencies(res.data.proficiencies);
  //     })
  //     .catch((err) => console.log(err));
  // }

    // console.log("++++++++++++++++++++++++++++++++++++");
    // console.log(weaponState);
    // console.log("++++++++++++++++++++++++++++++++++++");

    

  function getClassesArray() {
    API.getDndClasses()
      .then((res) => {
        // console.log(res.data.results);
        const classInformation = res.data.results;
        setCharacterClassState(classInformation);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMonstersArray() {
    API.getDndMonsters()
      .then((res) => {
        // console.log(res.data.results);
        const monsters = res.data.results;
        setMonsterState(monsters);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getRacesArray() {
    API.getDndRaces()
      .then((res) => {
        // console.log(res.data.results);
        // target name for mapping
        // url for click API call query
        const race = res.data.results;
        setraceState(race);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getDndEqupArray() {
    API.getDndEquipment()
      .then((res) => {
        // console.log(res.data.results);
        const equipment = res.data.results;
        setequipmentState(equipment);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getDndSpellsArray() {
    API.getDndSpells()
      .then((res) => {
        // console.log(res.data.results);
        const spells = res.data.results;
        setspellState(spells);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getDndArmorArray() {
    API.getDndArmor()
      .then((res) => {
        // console.log(res.data.equipment);
        const armor = res.data.equipment;
        setarmorState(armor);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getDndWeaponArray() {
    API.getDndWeapon()
      .then((res) => {
        // console.log(res.data.equipment);
        const weapon = res.data.equipment;
        setweaponState(weapon);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getDndRules() {
    API.getDndRules()
      .then((res) => {
        // console.log(res.data.results);
        const rules = res.data.results;
        setrulesState(rules);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // need to add more information

  return (
    <>
      <div>
        <div className="container">
          <h1 className="center">Spellbook</h1>
         

        </div>
      </div>
    </>
  );
}

export default Spellbook;
