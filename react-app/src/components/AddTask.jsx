import React from 'react';
import '../styles/add-task.css';

const AddTask = () =>
  <div className="add-task">
    <div className="add-task__inner">
      <div className="add-task__button">+</div>
      <input className="input" type="text" placeholder="Добавить задачу"></input>
    </div>
  </div>;

export default AddTask;
