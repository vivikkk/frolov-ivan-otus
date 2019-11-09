import React from 'react';
import Checkbox from './Checkbox'
import Remove from './Remove'
import '../styles/todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  render() {
    return(
      <div className={`todo__item ${this.props.checked ? 'todo__item_completed' : ''}`}>
        <Checkbox
          title={this.props.title}
          checked={this.props.checked ? true : false}
          checkboxHandler={() => this.props.onStatusChange(this.props.id)}
        />
        <Remove onClick={() => this.props.onDelete(this.props.id)}/>
      </div>
    );
  }
}

export default Todo;
