import React from "react";
import Item from "./Item";
import "./styles.css";

function List(props: { list: Array<string> }) {
  return (
    <ul>
      {props.list.map((item: string) => (
        <Item content={item} key={item} />
      ))}
    </ul>
  );
}

export default List;
