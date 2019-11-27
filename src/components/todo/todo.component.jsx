import React from "react";

export const Todo = props => (
  <div>
    <div>
      <input
        checked={props.todo.completed}
        onChange={e => props.handleCheckbox(props.todo.id)}
        type="checkbox"
      />
      <p>{props.todo.text}</p>
    </div>
    <button onClick={e => props.handleRemove(props.todo.id)}>Remove</button>
  </div>
);
