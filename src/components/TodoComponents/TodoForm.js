import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
        <input
          name="task"
          value={this.props.task}
          onChange={this.props.inputChangeHandler}
          placeholder="Whatcha wanna do..."
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
