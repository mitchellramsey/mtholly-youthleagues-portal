import React from "react";

export const ListItem = props => (
  <li className="list-group-item" >
    <button className="btn btn-primary kidButton button-actions" onClick={props.onClick}><h3>{props.children}</h3></button>
  </li>
);