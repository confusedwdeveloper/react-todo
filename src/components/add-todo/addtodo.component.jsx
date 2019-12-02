import React from "react";
import { uuid } from "uuidv4";
import Button from "@material-ui/core/Button";
import CustomInput from "../custom-input/customInput.component";
import "./addtodo.styles.css";

class AddTodo extends React.Component {
  state = {
    shouldError: false, // santizing data
    text: ""
  };
  saveText = e => {
    this.setState({ text: e.target.value });
  };
  handleForm = e => {
    e.preventDefault();
    const todoText = this.state.text.trim();
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
      // e.target.elements.newTodo.value = "";
      e.target.reset();
      this.setState({ shouldError: false, text: "" });
    }
  };
  render() {
    return (
      <form className="addtodo" onSubmit={this.handleForm}>
        <h3 className="addtodo__title"> Add new Todo</h3>
        <div className="form-container">
          <CustomInput
            filterFunction={this.saveText}
            type="text"
            label="Add New Todo"
            name="newTodo"
            helperText={
              this.state.shouldError ? "Please enter valid todo" : null
            }
            error={this.state.shouldError === true}
          />
          <Button type="submit" style={style.button} variant="contained">
            Add Todo
          </Button>
        </div>
      </form>
    );
  }
}
const style = {
  button: {
    background: "#f9bc60",
    color: "#001e1d"
  }
};

export { AddTodo };
