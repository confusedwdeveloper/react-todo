import React from "react";
import { Todo } from "../todo/todo.component";

export class Todos extends React.Component {
  render() {
    let filteredTodo = this.props.todos.filter(todo =>
      todo.text
        .toLowerCase()
        .trim()
        .includes(this.props.filterText.toLowerCase())
    );
    this.props.hideCompleted &&
      (filteredTodo = filteredTodo.filter(todo => !todo.completed));
    if (filteredTodo.length === 0) {
      return <p>Nothing to show here</p>;
    } else {
      return filteredTodo.map(todo => (
        <Todo
          handleCheckbox={this.props.handleCheckbox}
          todo={todo}
          key={todo.id}
          handleRemove={this.props.handleRemove}
        />
      ));
    }
  }
}
