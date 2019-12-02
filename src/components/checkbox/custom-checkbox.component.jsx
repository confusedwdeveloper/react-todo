import React from "react";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CustomCheckbox = props => {
  return (
    <FormControlLabel
      style={{ color: "#abd1c6" }}
      control={
        <Checkbox
          onChange={props.handleHideCompleted}
          style={{ color: "#abd1c6" }}
        />
      }
      label={props.label}
    />
  );
};

export default CustomCheckbox;
