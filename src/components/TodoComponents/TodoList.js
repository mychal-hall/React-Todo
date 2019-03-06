// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const todos = [
  {
    task: "Testomo",
    id: Date.now(),
    completed: false
  },
  {
    task: "Testo2",
    id: Date.now(),
    completed: false
  },
  {
    task: "Testo3",
    id: Date.now(),
    completed: false
  }
];

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      stateTodo: todos,
      task: "",
      id: Date.now(),
      completed: false
    };
  }

  render() {
    return (
      <div>
        <h1>Things you won't do -</h1>
        <div>
          {this.state.stateTodo.map(todo => (
            <Todo
              task={todo.task}
              key={todo.id}
            />
          ))}
        </div>
        <form>
            <
        </form>
      </div>
    );
  }
}

export default TodoList;
