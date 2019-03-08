import React from "react";

export default function Todo(props) {
  let completed = props.todo.completed ? "completed" : "";
  return (
    <div
    className={`task ${completed}`}
    key={props.todo.id}
    onClick={event => {
      props.toggleComplete(props.todo.id);
    }}
    >
      <p>{props.todo.task}</p>
    </div>
  );
}


