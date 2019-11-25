import React from "react";

export const Filter = props => (
  <div>
    <input
      type="search"
      onChange={props.filterFunction}
      placeholder="filter todos"
    />
  </div>
);
