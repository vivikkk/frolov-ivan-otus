import React from 'react';
import Checkbox from './Checkbox'
import '../styles/todo.css';

const Todo = (props) =>
  <div className={`todo__item ${props.checked ? 'todo__item_completed' : ''}`}>
    <Checkbox title={props.title} checked={props.checked ? true : false}/>
  </div>;

export default Todo;
