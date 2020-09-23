import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { IEvent } from "./Item";
import Item from "./Item";
import "./styles.css";

type List = {
  itemList: Array<IEvent>;
};

function Lista(props: List) {
  const [list, setList] = useState(props.itemList);

  const handleDelete = (title: string) => {
    const filteredList = list.filter((el) => el.title !== title);
    setList(filteredList);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Event list</h1>
      <List>
        {list.map((item) => (
          <Item {...item} key={item.title} onDelete={handleDelete} />
        ))}
      </List>
    </Grid>
  );
}

export default Lista;
