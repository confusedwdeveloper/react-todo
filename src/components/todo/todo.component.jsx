import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";
import "./todo.styles.css";

export const Todo = props => (
  <div className="todo-outer-div">
    <div className="todo-inner-div">
      <FormControlLabel
        control={
          <Checkbox
            onChange={e => props.handleCheckbox(props.todo.id)}
            style={{ color: "#abd1c6" }}
            checked={props.todo.completed}
          />
        }
        label={props.todo.text}
      />
    </div>
    <Button
      variant="contained"
      onClick={e => props.handleRemove(props.todo.id)}
      color="primary"
    >
      <DeleteIcon />
    </Button>
  </div>
);
