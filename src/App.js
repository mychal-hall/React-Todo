import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  {
    task: "Check the EPS relays",
    id: 1,
    completed: false
  },
  {
    task: "Adjust inertial dampeners",
    id: 2,
    completed: false
  },
  {
    task: "Restart the warp core",
    id: 3,
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
    };
  }

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: false
    };
    this.setState({ stateTodo: [...this.state.stateTodo, newTodo] });
  };

  toggleComplete = taskId => {
    this.setState(prevState => {
      return {
        todos: prevState.stateTodo.map(task => {
          if (task.id === taskId) {
            return {
              task: task.task,
              id: task.id,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      }
    })
  }

  removeCompleted = event => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(task => {
          return !task.completed;
        })
      };
    });
  };
  render() {
    return (
      <div>
        <div className="header">
          <h1>Things to do</h1>
        </div>
        <TodoList
          stateTodo={this.state.stateTodo}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          task={this.state.task}
          inputChangeHandler={this.inputChangeHandler}
          submitHandler={this.submitHandler}
        />
        <button
          onClick={this.removeCompleted}
          className="clearButton"
        >
          Remove Completed
        </button>
      </div>
    );
  }
}

export default App;
