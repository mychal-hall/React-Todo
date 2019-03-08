import React from "react";

export default function Todo(props) {
  let completed = props.todo.completed ? "completed" : "";
  return (
    <div
    className={`task ${completed}`}
    key={props.todo.id}
    onClick={() => {
      props.toggleComplete(props.todo.id);
    }}
    >
      <p className="task-text">{props.todo.task}</p>
    </div>
  );
}


