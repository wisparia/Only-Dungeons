import React, { useState } from "react";
import Dmaster from "../../components/Dmaster/Dmaster";

function DmDirectory() {
  const [allDms, setDms] = useState([
    {
      userName: "MoonRider34",
      password: "dNDrocks213",
      email: "moon_rider23@gmail.com",
      isDm: true,
      roomName: "The Moonlit Quarter",
      tagLine: "Snitches get stitches",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: false,
        homebrew: false,
        lvl1only: false,
        rpersonly: true,
        oneshots: true,
        displaydice: false,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: false,
        wednesday: true,
        thursday: false,
        friday: true,
        saturday: true,
        sunday: false,
      },
      preferredRole: "rogue",
    },

    {
      userName: "SunRider43",
      password: "dndIsTheBEST22",
      email: "sunRider43@gmail.com",
      isDm: true,
      roomName: "The Sun Spot",
      tagLine: "Frosty Games Only",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: true,
        homebrew: true,
        lvl1only: true,
        rpersonly: true,
        oneshots: true,
        displaydice: true,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: true,
        wednesday: false,
        thursday: true,
        friday: false,
        saturday: true,
        sunday: true,
      },
      preferredRole: "paladin",
    },

    {
      userName: "dnDreamer",
      password: "sweetDreams234",
      email: "dnDreamer@gmail.com",
      isDm: true,
      roomName: "The Astral Sea",
      tagLine: "Make a Constitution Saving Throw",
      categoryType: {
        byTheBook: false,
        campaigns: false,
        norestriction: true,
        homebrew: true,
        lvl1only: false,
        rpersonly: false,
        oneshots: true,
        displaydice: true,
        voyuerallowed: false,
      },
      availablity: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      preferredRole: "warlock",
    },

    {
      userName: "MrMurderHobo",
      password: "killITWITHfire22",
      email: "MrMurderHobo@gmail.com",
      isDm: false,
      tagLine: "Kill it with Fire!",
      categoryType: {
        byTheBook: false,
        campaigns: true,
        norestriction: true,
        homebrew: true,
        lvl1only: false,
        rpersonly: true,
        oneshots: true,
        displaydice: true,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      preferredRole: "barbarian",
    },
    {
      userName: "Feisty_Ferret",
      password: "festy_ferret122",
      email: "rustyWalker@gmail.com",
      isDm: true,
      roomName: "The Fey Wild",
      tagLine: "I make it weird!",
      categoryType: {
        byTheBook: true,
        campaigns: false,
        norestriction: true,
        homebrew: false,
        lvl1only: false,
        rpersonly: true,
        oneshots: true,
        displaydice: true,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
      },
      preferredRole: "druid",
    },
    {
      userName: "sylofade",
      password: "sylofaded24",
      email: "sylofaddm@gmail.com",
      isDm: true,
      roomName: "The Blade Garden",
      tagLine: "Better than Craigslist",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: true,
        homebrew: true,
        lvl1only: true,
        rpersonly: true,
        oneshots: true,
        displaydice: true,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: false,
        wednesday: false,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      preferredRole: "wizard",
    },
    {
      userName: "titacularTonks",
      password: "titacular34DND",
      email: "titacularTonks@gmail.com",
      isDm: true,
      roomName: "Tonks Terrifically Terrifying Terrace",
      tagLine: "Terrifically Terrifying",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: false,
        homebrew: true,
        lvl1only: true,
        rpersonly: true,
        oneshots: true,
        displaydice: true,
        voyuerallowed: false,
      },
      availablity: {
        monday: false,
        tuesday: true,
        wednesday: false,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: true,
      },
      preferredRole: "rogue",
    },
    {
      userName: "Wisparia",
      password: "wisparia44#2",
      email: "wisparia@gmail.com",
      isDm: true,
      roomName: "The Glade",
      tagLine: "Expect the unexpected...",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: true,
        homebrew: true,
        lvl1only: true,
        rpersonly: false,
        oneshots: true,
        displaydice: true,
        voyuerallowed: true,
      },
      availablity: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      preferredRole: "druid",
    },
    {
      userName: "Game_Grunt",
      password: "dndGameGrunt243!",
      email: "gamegrunt22@gmail.com",
      isDm: true,
      roomName: "The Laboratory",
      tagLine: "Role initiative!",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: false,
        homebrew: false,
        lvl1only: false,
        rpersonly: false,
        oneshots: true,
        displaydice: false,
        voyuerallowed: false,
      },
      availablity: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      preferredRole: "cleric",
    },
    {
      userName: "KitFisto",
      password: "password132",
      email: "kItFisTo28",
      isDm: false,
      tagLine: "For Glory!",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: false,
        homebrew: false,
        lvl1only: true,
        rpersonly: true,
        oneshots: false,
        displaydice: false,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
      },
      preferredRole: "paladin",
    },
    {
      userName: "Ol' Tut",
      password: "tortleTime!",
      email: "tortletime@gmail.com",
      isDm: false,
      tagLine: "Slow and Steady",
      categoryType: {
        byTheBook: true,
        campaigns: false,
        norestriction: false,
        homebrew: false,
        lvl1only: true,
        rpersonly: true,
        oneshots: true,
        displaydice: true,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: false,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: false,
      },
      preferredRole: "cleric",
    },
    {
      userName: "Claudia_Minx",
      password: "yeehaw070916",
      email: "yeehaw@gmail.com",
      isDm: false,
      tagLine: "Eldritch Blast",
      categoryType: {
        byTheBook: false,
        campaigns: true,
        norestriction: true,
        homebrew: true,
        lvl1only: false,
        rpersonly: false,
        oneshots: true,
        displaydice: false,
        voyuerallowed: true,
      },
      availablity: {
        monday: false,
        tuesday: false,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      preferredRole: "warlock",
    },
    {
      userName: "Frost_Fey",
      password: "feyReign234@1",
      email: "feyfrost@gmail.com",
      isDm: true,
      roomName: "The Rabbit Hole",
      tagLine: "Change Places!",
      categoryType: {
        byTheBook: false,
        campaigns: true,
        norestriction: true,
        homebrew: true,
        lvl1only: true,
        rpersonly: true,
        oneshots: true,
        displaydice: false,
        voyuerallowed: true,
      },
      availablity: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
      },
      preferredRole: "druid",
    },
    {
      userName: "Shadowfiend",
      password: "inShaDow31",
      email: "shadowfiend@gmail.com",
      isDm: true,
      roomName: "The Underdark",
      tagLine: "Slip into my DMs!",
      categoryType: {
        byTheBook: true,
        campaigns: true,
        norestriction: false,
        homebrew: false,
        lvl1only: true,
        rpersonly: false,
        oneshots: false,
        displaydice: true,
        voyuerallowed: true,
      },
      availablity: {
        monday: false,
        tuesday: false,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: true,
      },
      preferredRole: "ranger",
    },
  ]);

  return (
    <>
      <div className="container">
        <form className="content-border">
          <input type="text" />
          <input
            className="vertical-spacer-sm waves-effect waves-light btn"
            type="submit"
          />
        </form>
      </div>

      <div className="row">
        <div className="col s3 content-border">
          <div className="row">
            <div className="col s12">
              <h5>Category:</h5>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>oneshots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>homebrew</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>byTheBook</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>rpersonly</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>norestriction</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s12">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>
                      <p>displaydice</p>
                    </span>
                  </label>
                </p>
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

        <div className="col s9 content-border">
          {allDms.map((dm) => (
            <Dmaster
              key={dm.userName}
              userName={dm.userName}
              tagLine={dm.tagLine}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DmDirectory;
