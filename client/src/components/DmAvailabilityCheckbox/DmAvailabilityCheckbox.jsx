import React, { useEffect, useState } from "react";

const availabilityCheckboxes = [
    {
      _id: 1,
      name: "monday",
    },
    {
      _id: 2,
      name: "tuesday",
    },
    {
      _id: 3,
      name: "wednesday",
    },
    {
      _id: 4,
      name: "thursday",
    },
    {
      _id: 5,
      name: "friday",
    },
    {
      _id: 6,
      name: "saturday",
    },
    {
      _id: 7,
      name: "sunday",
    }
  ]

const DmAvailabilityCheckbox = (props) => {
    const [checkboxItems, setCheckboxes] = useState([]);
    const [Checked, setChecked] = useState([]);
  
    useEffect(() => {
      setCheckboxes(availabilityCheckboxes);
    }, []);

    const handleDayToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked]

        if (currentIndex === -1) {
            newChecked.push(value);
          } else {
            newChecked.splice(currentIndex, 1);
          }
          setChecked(newChecked);
          // giving our newChecked items to the handleFilters()
          props.handleDayFilters(newChecked)
    }

    const checkChecked = () => {
        console.log(Checked)
      }

    return (

<>
{checkboxItems.map((checkboxItem) => (
<div className="col s12">
          <label>
            <input
              key={checkboxItem._id}
              type="checkbox"
              name={checkboxItem.name}
              value={checkboxItem.name}
              onChange={() => handleDayToggle(checkboxItem.name)}
              checked={Checked.indexOf(checkboxItem.name) === -1 ? false : true}
            />
            <span>
              <p>{checkboxItem.name}</p>
            </span>
          </label>
        </div>
))}


</>
    );
};

export default DmAvailabilityCheckbox;