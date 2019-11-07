import React from 'react';

const Input = (props) => {
  return (
    <label>
      <span>Поиск по городу: </span>
      <input
        onChange={props.searchInputHandler}
        type="text"
        name="name"
      />
    </label>
  );
};


export default Input;
