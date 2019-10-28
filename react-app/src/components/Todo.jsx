import React from 'react';
import Checkbox from './Checkbox'
import '../todo.css';

const Todo = (props) => {
  return (
    <div className="todo__item">
      <Checkbox title={props.title}/>
    </div>
  );
};

export default Todo;
