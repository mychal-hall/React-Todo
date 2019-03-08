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
      todos: todos,
      task: "",
      id: Date.now()
    };
  }

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          {
            completed: false,
            id: Date.now(),
            task: prevState.task
          }
        ],
        task: ""
      };
    });
  };

  toggleComplete = taskId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(taskItem => {
          if (taskItem.id === taskId) {
            return {
              id: taskItem.id,
              completed: !taskItem.completed
            };
          } else {
            return taskItem;
          }
        })
      };
    });
  };

  removeCompleted = event => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(taskItem => {
          return !taskItem.completed;
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
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          task={this.state.task}
          inputChangeHandler={this.inputChangeHandler}
          submitHandler={this.submitHandler}
        />
        <button onClick={this.removeCompleted} className="clearButton">
          Remove Completed
        </button>
      </div>
    );
  }
}

export default App;
