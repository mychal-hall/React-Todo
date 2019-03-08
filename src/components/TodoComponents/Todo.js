import React from "react";

export default function Todo(props) {
  let completed = props.task.completed ? " completed" : "";
  return (
    <div
    className={`task ${completed}`}
    key={props.task.id}
    onClick={event => {
      props.toggleComplete(props.task.id);
    }}
    >
      <p>{props.task}</p>
    </div>
  );
}


