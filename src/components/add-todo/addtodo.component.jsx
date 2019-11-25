import React from "react";

export const AddTodo = props => (
  <form>
    <h3> Add new Todo</h3>
    <input name="newTodo" type="text" placeholder="add new todo" />
    <button type="submit">Add</button>
  </form>
);
