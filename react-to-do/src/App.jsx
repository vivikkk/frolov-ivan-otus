import React from 'react';

import Header from './components/Header';
import Todo from './components/Todo';
import AddTask from './components/AddTask';
import './styles/todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.initialData,
    }

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleStatusChange(id) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }

      return todo;
    });

    this.setState({todos});
  }

  handleDelete(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({todos});
  }

  handleAdd(title) {
    let todo = {
      id: 4,
      title,
      checked: false,
    }

    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  render() {
    return(
      <main className="wrapper">
        <Header title={this.props.title} />

        <section className="todo">
          {this.state.todos.map(
            todo => {
              return(
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  checked={todo.checked}
                  onStatusChange={this.handleStatusChange}
                  onDelete={this.handleDelete}
                />
              );
            }
          )}
        </section>

        <AddTask onAdd={this.handleAdd}/>
      </main>
    );
  }
}

export default App;
