import React from "react";
import { Container } from "./components/container/container.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filterText: ""
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
  filterFunction = e => {
    const filterText = e.target.value.trim();
    this.setState({
      filterText
    });
  };

  render() {
    return (
      <div>
        <Container
          todos={this.state.todos}
          filterText={this.state.filterText}
          filterFunction={this.filterFunction}
        />
      </div>
    );
  }
}

export default App;
