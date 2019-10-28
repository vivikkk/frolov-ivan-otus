import React from 'react';

import Header from './components/Header';
import Todo from './components/Todo';
import AddTask from './components/AddTask';
import './todo.css';

const App = (props) => {
  return (
    <main className="wrapper">
      <Header title={props.title} />

      <section className="todo">
        <Todo title={"Моя первая задача"}/>
        <Todo title={"Моя вторая задача"}/>
        <Todo title={"Моя третья задача"}/>
      </section>
      <AddTask />
    </main>
  );
};

export default App;
