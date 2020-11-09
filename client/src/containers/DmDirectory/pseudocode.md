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
    *   console.log(searchedDms)
    *   hardcode how we can filter those searchedDms
    *  showFilteredResults function works for limiting the display of Dms based on a hardcoded click event.
    *   Make that single on click event dynamic, so that when clicked the event limits the outcome
    *   It is an array so creating a for loop if conditional makes the most sense to check if the index is > 0, and if so then to create a filter for each category type that comes in.
    *   Create a conditional that allows to check IF the string in the array matches the boolean value SET TO FALSE, then filter

4. Celebrate
    * Celebration complete, now edge cases



## Filter Users Advanced

    *   Currently you can:
            * Filter based on category checkboxes
                * As you unCheck the previous state of checkboxes is rendered
                * As you check availability, it resets the state and does not include what has already been rendered for AVAILABILITY
            * Filter based on availability checkboxes
                * As you unCheck the previous state of checkboxes is rendered
                * As you check availability, it resets the state and does not include what has already been rendered for CATEGORY
            * Filter based on search
                * You are able to filter based on what is in the current array of searchedDms
                * As you delete letters in your search, your search is not currently updated to a previous state of searchedDms

    *   What do we want to do?
            *   handleSearch, handleFilters & handleDayFilters are all reset to the originalDms from the API when their states are empty or ""
            *   What I am trying to accomplish is not have it reset automatically, but to use other filters & searches before reverting an original state.
            *   This is problematic as my conditions for rendering changed the searchedState, BUT if we instead, called in our handleFunctions immediately after rendering this should alter the DMs rendering based on what array of checks have occurred.

    -example of original "category" handleFilter
````javascript
        const handleFilters = (filters, category) => {
        if (filters.length === 0) {
            setOriginalDms();
            // setFilters()
        } else {
            const newFilters = { ...categoryFilters };
            newFilters[category] = filters;
            setFilters(newFilters);
        }
        };
````

    -pseudo code "category" handleFilter update with new logic for conditional rendering

````javascript
        const handleFilters = (filters, category) => {
        if (filters.length === 0 && availability.days.length === 0) {
            setOriginalDms();
            // setFilters()
        } else {
            const newFilters = { ...categoryFilters };
            newFilters[category] = filters;
            setFilters(newFilters);
        }
        };
````



  // check for checkboxes
/* if(checkboxes && !input){
  setValue(checkbox values)
}else if(checkboxeses && input){
  setValue(checkboxes and input)
}else{give all}*/
