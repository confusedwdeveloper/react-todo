import React from "react";
import { uuid } from "uuidv4";

class AddTodo extends React.Component {
  state = {
    shouldError: false // santizing data
  };
  handleForm = e => {
    e.preventDefault();
    const todoText = e.target.elements.newTodo.value.trim();
    if (todoText.length === 0) {
      this.setState(prevState => ({
        shouldError: true
      }));
    } else {
      const todo = {
        text: todoText,
        id: uuid(),
        completed: false
      };
      this.props.handleAddTodo(todo);
      e.target.elements.newTodo.value = "";
      this.setState({ shouldError: false });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <h3> Add new Todo</h3>
        <input name="newTodo" type="text" placeholder="add new todo" />
        <button type="submit">Add</button>
        {this.state.shouldError && <p>Please enter valid text</p>}
      </form>
    );
  }
}

export { AddTodo };
