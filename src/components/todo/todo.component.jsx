import React from "react";

export const Todo = props => (
  <div>
    <div>
      <input type="checkbox" />
      <p>{props.text}</p>
    </div>
    <button>Remove</button>
  </div>
);
