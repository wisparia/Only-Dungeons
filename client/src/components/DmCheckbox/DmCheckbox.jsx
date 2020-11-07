import React from 'react';
import { Checkbox } from 'react-materialize';

const DmCheckbox = ({checkbox: {name, _id}}) => {
    return (
      <div className="col s12">
          <label>
            <input type="checkbox" />
            <span>
              <p>{name}</p>
            </span>
          </label>
      </div>
    );
};

export default DmCheckbox;