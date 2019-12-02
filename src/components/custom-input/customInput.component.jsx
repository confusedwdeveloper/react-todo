import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& .MuiInput-underline:before": {
      borderBottomColor: "#abd1c6"
    },
    "& .MuiInputLabel-root": {
      color: "#abd1c6"
    },
    "& label.Mui-focused": {
      color: "#abd1c6"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#abd1c6"
    },
    "& .MuiInput-input": {
      color: "#abd1c6"
    }
  }
})(TextField);

export default function CustomInput(props) {
  return (
    <CssTextField
      id="custom-css-standard-input"
      label={props.label}
      type={props.type}
      onChange={props.filterFunction}
      error={props.error}
      helperText={props.helperText}
    />
  );
}
CustomInput.defaultProps = {
  type: "text",
  error: false
};
