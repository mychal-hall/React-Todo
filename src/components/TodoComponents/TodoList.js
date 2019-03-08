// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div className="task-list">
      {props.todos.map(todo => (
        <Todo todo={todo} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
}
/* const todos = [
   { */
//     task: "Testomo",
//     id: Date.now(),
//     completed: false
//   },
//   {
//     task: "Testo2",
//     id: Date.now(),
//     completed: false
//   },
//   {
//     task: "Testo3",
//     id: Date.now(),
//     completed: false
//   }
// ];

// class TodoList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//      .todos: todos,
//       task: "",
//       id: Date.now(),
//       completed: false
//     };
//   }

//   inputChangeHandler = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   submitHandler = event => {
//     event.preventDefault();
//     let newTodo = {
//       task: this.state.task,
//       id: this.state.id,
//       completed: false
//     };
//     this.setState({.todos: [...this.state.todos, newTodo] });
//   };

//   render() {
// return (
//   <div>
//     <h1>Things you won't do -</h1>
//     <div>
//       {this.state.todos.map(todo => (
//         <Todo task={todo.task} key={todo.id} />
//       ))}
//         </div>
//         <form onSubmit={this.submitHandler}>
//           <input
//             name="task"
//             value={this.state.task}
//             onChange={this.inputChangeHandler}
//             placeholder="Whatcha wanna do..."
//           />
//           <button type="submit">Add Todo</button>
//           <button type="submit">Think you're done?!</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default TodoList;
