import React from 'react';

const Checkbox = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.checkboxHandler}
      />
      <span className="checkmark">{props.title}</span>
    </label>
  );
};

export default Checkbox;
