import React from "react";
import CustomInput from "../custom-input/customInput.component";
import "./filter.styles.css";
import Checkbox from "../checkbox/custom-checkbox.component";

export const Filter = props => (
  <div className="filter">
    <CustomInput
      type="search"
      label="Filter Todos"
      filterFunction={props.filterFunction}
    />
    <Checkbox
      label={"Hide Completed"}
      handleHideCompleted={props.handleHideCompleted}
    />
  </div>
);
