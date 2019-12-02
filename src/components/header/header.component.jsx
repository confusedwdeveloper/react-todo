import React from "react";
import { Divider } from "@material-ui/core";
import "./header.styles.css";

export const Header = () => (
  <header className="header">
    <h1 className="big-title">Todo App</h1>
    <p className="subtitle">A Todo Application built using React</p>
    <Divider light={true} variant="middle" />
  </header>
);
