import React from "react";

export const Filter = props => (
  <div>
    <input
      type="search"
      onChange={props.filterFunction}
      placeholder="filter todos"
    />
    <label>
      Hide Completed{" "}
      <input onChange={props.handleHideCompleted} type="checkbox" />
    </label>
  </div>
);
