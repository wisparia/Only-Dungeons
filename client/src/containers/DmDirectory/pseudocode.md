## Filtering Through Users

Users are called into DmDirectory through an API call

They exist in state with all of their user properties available for targetting and manipulating.

They are then passed to Dmaster where they are mapped into buttons that will allow us to access their individual pages

We currently have a search function that filters through the list of dungeon masters based on their names.

I am currently interested in bringing in a toggle feature to alter the display of DMs

## Goal
As a category button is clicked it makes it so that only DMs with that category set as TRUE will display. 

the toggle button **
    *   when clicked must join an array of clicked items, when unclicked must leave that array
    *   the items in that array will be what we filter our DMs by using a similar approach to "searchedDms" functionality.
    *   where the DMs within our state are searched and edited based on items being clicked


Currently, I have a list of checkboxItems that are displayed and then added to and taken out of an array based their "_id."

## Steps to take
RETURN TO THIS AS ISSUES ARISE OR ARE COMPLETED

1. Don't break anything
2. Change that array from an array of numbers to an array of string values
3. Set up a function that will filter the "searchedDms" state based on checked categories.
4. Celebrate
