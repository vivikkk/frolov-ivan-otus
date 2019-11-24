import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <label>
      <span>Поиск по городу: </span>
      <input
        onChange={ props.inputHandler }
        type="text"
        name="name"
      />
    </label>
  );
};

Input.propTypes = {
  inputHandler: PropTypes.func.isRequired
};

export default Input;
