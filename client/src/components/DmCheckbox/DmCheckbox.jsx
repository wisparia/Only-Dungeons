import React, { useEffect, useState } from "react";

const categoryCheckboxes = [
  {
    _id: 1,
    name: "campaigns",
  },
  {
    _id: 2,
    name: "oneshots",
  },
  {
    _id: 3,
    name: "homebrew",
  },
  {
    _id: 4,
    name: "byTheBook",
  },
  {
    _id: 5,
    name: "lvl1only",
  },
  {
    _id: 6,
    name: "rpersonly",
  },
  {
    _id: 7,
    name: "displaydice",
  },
  {
    _id: 8,
    name: "voyuerallowed",
  },
  {
    _id: 9,
    name: "norestriction",
  },
];

const DmCheckbox = () => {
  const [checkboxItems, setCheckboxes] = useState([]);
  const [Checked, setChecked] = useState([]);

  useEffect(() => {
    console.log("used the effect");
    setCheckboxes(categoryCheckboxes);
  }, []);

  const handleToggle = (value) => {
    console.log(value);
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
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
              value={checkboxItem._id}
              onChange={() => handleToggle(checkboxItem._id)}
            />
            <span>
              <p>{checkboxItem.name}</p>
            </span>
          </label>
        </div>
      ))}
      {/* <h1 onClick={checkChecked}> Hello </h1> */}
    </>
  );
};

export default DmCheckbox;
