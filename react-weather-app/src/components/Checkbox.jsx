import React from 'react';

const Checkbox = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.checkboxHandler}
      />
      <span> Добавить в избранное</span>
    </label>
  );
};

export default Checkbox;
