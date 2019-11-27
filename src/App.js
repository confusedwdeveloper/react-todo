import React from "react";
import { Container } from "./components/container/container.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filterText: "",
      hideCompleted: false
    };
  }

  componentDidMount() {
    let todos;
    try {
      const todoJson = localStorage.getItem("todos");
      todos = todoJson ? JSON.parse(todoJson) : [];
    } catch (e) {
      todos = [];
    }
    this.setState({
      todos
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  filterFunction = e => {
    const filterText = e.target.value.trim();
    this.setState({
      filterText
    });
  };
  handleAddTodo = todo =>
    this.setState(prevState => ({
      todos: prevState.todos.concat(todo)
    }));
  // checkbox of individual todo
  handleCheckbox = id => {
    const arr = [...this.state.todos];
    const todo = arr.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    this.setState(prevState => ({
      todos: arr
    }));
  };
  handleRemove = id => {
    //const arr = [...this.state.todos];
    const index = this.state.todos.findIndex(todo => todo.id === id);
    index !== -1 &&
      this.setState(prevState => ({
        todos: prevState.todos.filter((todo, i) => i !== index)
      }));
  };
  handleHideCompleted = () =>
    this.setState(prevState => ({ hideCompleted: !prevState.hideCompleted }));

  render() {
    return (
      <div>
        <Container
          todos={this.state.todos}
          filterText={this.state.filterText}
          filterFunction={this.filterFunction}
          handleAddTodo={this.handleAddTodo}
          handleCheckbox={this.handleCheckbox}
          handleRemove={this.handleRemove}
          handleHideCompleted={this.handleHideCompleted}
          hideCompleted={this.state.hideCompleted}
        />
      </div>
    );
  }
}

export default App;
