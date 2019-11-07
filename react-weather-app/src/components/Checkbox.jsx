import React from 'react';
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkboxHandler: PropTypes.func.isRequired
};

export default Checkbox;
