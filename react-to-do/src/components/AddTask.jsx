import React from 'react';
import '../styles/add-task.css';

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let title = this.state.title;

    if (title) {
      this.props.onAdd(title);
      this.setState({ title: '' });
    }
  }

  handleChange(event) {
    let title = event.target.value;

    this.setState({ title });
  }

  render() {
    return (
      <form className="add-task" onSubmit={this.handleSubmit}>
        <div className="add-task__inner">
          <button className="add-task__button" type="submit">+</button>
          <input
            className="input"
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            placeholder="Добавить задачу">
          </input>
        </div>
      </form>
    );
  }
}

export default AddTask;
