import React from "react";
import Item from "./Item";
import "./styles.css";

function List(props: { list: Array<string> }) {
  const lista = props.list;

  const itemList = lista.map((item: string | undefined) => (
    <Item content={item} key={item} />
  ));
  return <ul>{itemList}</ul>;
}

export default List;
