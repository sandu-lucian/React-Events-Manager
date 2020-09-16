import React from "react";
import "./styles.css";

function Item(props: { content: string }) {
  return (
    <li>
      <label htmlFor={props.content}>
        <input type="checkbox" id={props.content} />
        {props.content}
      </label>
    </li>
  );
}

export default Item;
