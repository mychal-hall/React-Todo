import React from "react";

function Todo(props) {
  return (
    <div className="todoMain">
      <p>{props.task}</p>
    </div>
  );
}

export default Todo;
