import React from 'react';

import Header from './components/Header';
import Todo from './components/Todo';
import AddTask from './components/AddTask';
import './styles/todo.css';

const App = (props) => {
  return (
    <main className="wrapper">
      <Header title={props.title} />

      <section className="todo">
        {props.todos.map(
          todo => <Todo key ={todo.id} title={todo.title} checked={todo.checked}/>
        )}
      </section>

      <AddTask />
    </main>
  );
};

export default App;
