import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form" onSubmit={this.props.submitHandler}>
        <input
          className="input"
          name="task"
          value={this.props.task}
          onChange={this.props.inputChangeHandler}
          placeholder="INPUT REQUEST"
        />
        <button className="add-button" type="submit">
          ADD REQUEST
        </button>
      </form>
    );
  }
}
