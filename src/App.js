import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateTodo: todos,
      task: "",
      id: Date.now(),
      completed: false
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
