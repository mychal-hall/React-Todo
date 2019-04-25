import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./app.css";

const todos = [
  {
    task: "CHECK THE EPS RELAYS",
    id: 1,
    completed: false
  },
  {
    task: "ADJUST INERTIAL DAMPENERS",
    id: 2,
    completed: false
  },
  {
    task: "RESTART THE WARP CORE",
    id: 3,
    completed: false
  },
  {
    task: "REMODULATE SHIELDS",
    id: 4,
    completed: false
  },
  {
    task: "REALIGN THE MAIN DEFLECTOR",
    id: 5,
    completed: false
  },
  {
    task: "FIND THE PORT NACELLE",
    id: 6,
    completed: false
  },
  {
    task: "INSTALL WINDOWS 95",
    id: 7,
    completed: false
  },
  {
    task: "FIND VOYAGER",
    id: 8,
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
              task: taskItem.task,
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
      <div className="app-container">
        <h2>LCARS</h2>
        <div className="app-content">
          <div className="header">
            <h1>MAINTENANCE REQUESTS</h1>
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
          <button className="remove-button" onClick={this.removeCompleted}>
            REMOVE COMPLETED
          </button>
        </div>
      </div>
    );
  }
}

export default App;
