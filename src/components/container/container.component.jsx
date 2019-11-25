import React from "react";
import { Header } from "../header/header.component";
import { Todos } from "../todos/todos.component";
import { Filter } from "../filter/filter.component";
import { AddTodo } from "../add-todo/addtodo.component";
export const Container = props => (
  <div>
    <Header />
    <Filter filterFunction={props.filterFunction} />
    <Todos filterText={props.filterText} todos={props.todos} />
    <AddTodo />
  </div>
);
