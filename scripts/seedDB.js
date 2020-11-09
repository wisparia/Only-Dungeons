const mongoose = require("mongoose");
const db = require("../models");
// const uuid = require ('uuid');

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/only-dungeons-db"
)

const userSeed = [

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
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: false,
            wednesday: true,
            thursday: false,
            friday: true, 
            saturday: true,
            sunday: false
        }, 
        preferredRole: "Rogue"
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
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: true,
            friday: false, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Paladin"
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
            voyuerallowed: false
        },
        availability:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Warlock"
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
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Barbarian"
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
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: false,
            sunday: false
        }, 
        preferredRole: "druid"
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
            campaigns:true, 
            norestriction: true,
            homebrew: true,
            lvl1only: true,
            rpersonly: true,
            oneshots: true,
            displaydice: true,
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: false,
            wednesday: false,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Wizard"
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
            campaigns:true, 
            norestriction: false,
            homebrew: true,
            lvl1only: true,
            rpersonly: true,
            oneshots: true,
            displaydice: true,
            voyuerallowed: false
        },
        availability:{
            monday: false,
            tuesday: true,
            wednesday: false,
            thursday: true,
            friday: true, 
            saturday: false,
            sunday: true
        }, 
        preferredRole: "Rogue"
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
            campaigns:true, 
            norestriction: true,
            homebrew: true,
            lvl1only: true,
            rpersonly: false,
            oneshots: true,
            displaydice: true,
            voyuerallowed: true
        },
        availability:{
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Druid"
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
            campaigns:true, 
            norestriction: false,
            homebrew: false,
            lvl1only: false,
            rpersonly: false,
            oneshots: true,
            displaydice: false,
            voyuerallowed: false
        },
        availability:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Cleric"
    },
    {
        userName: "KitFisto",
        password: "password132",
        email: "kItFisTo28",
        isDm: false,
        tagLine: "For Glory!",
        categoryType: {
            byTheBook: true,
            campaigns:true,
            norestriction: false,
            homebrew: false,
            lvl1only: true,
            rpersonly: true,
            oneshots: false,
            displaydice: false,
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: false,
            sunday: false
        }, 
        preferredRole: "Paladin"
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
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: false,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: false
        }, 
        preferredRole: "Cleric"
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
            voyuerallowed: true
        },
        availability:{
            monday: false,
            tuesday: false,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Warlock"
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
            voyuerallowed: true
        },
        availability:{
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: true,
            sunday: true
        }, 
        preferredRole: "Druid"
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
            voyuerallowed: true
        },
        availability:{
            monday: false,
            tuesday: false,
            wednesday: true,
            thursday: true,
            friday: true, 
            saturday: false,
            sunday: true
        }, 
        preferredRole: "Ranger"
    }

];

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
