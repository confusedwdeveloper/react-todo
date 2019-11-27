import React from "react";
import { Header } from "../header/header.component";
import { Todos } from "../todos/todos.component";
import { Filter } from "../filter/filter.component";
import { AddTodo } from "../add-todo/addtodo.component";
export const Container = props => (
  <div>
    <Header />
    <Filter
      filterFunction={props.filterFunction}
      handleHideCompleted={props.handleHideCompleted}
    />
    <Todos
      filterText={props.filterText}
      todos={props.todos}
      handleCheckbox={props.handleCheckbox}
      handleRemove={props.handleRemove}
      hideCompleted={props.hideCompleted}
    />
    <AddTodo handleAddTodo={props.handleAddTodo} />
  </div>
);
