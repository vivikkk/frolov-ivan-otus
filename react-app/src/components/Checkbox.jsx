import React from 'react';

const Checkbox = (props) => {
  return (
    <label>
      <input type="checkbox"/>
      <span className="checkmark">{props.title}</span>
    </label>
  );
};

export default Checkbox;
