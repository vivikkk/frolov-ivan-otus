import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  checkboxHandler(event) {
    this.setState({
      checked: event.target.checked
    });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.checkboxHandler}
        />
        <span className="checkmark">{this.props.title}</span>
      </label>
    );
  }
}

export default Checkbox;
