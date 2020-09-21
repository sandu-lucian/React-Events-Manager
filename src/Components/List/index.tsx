import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { Props } from "./Item";
import Item from "./Item";
import "./styles.css";

type List = {
  itemList: Array<Props>;
};

function Lista(props: List) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Event list</h1>
      <List>
        {props.itemList.map((item) => (
          <Item {...item} key={item.title} />
        ))}
      </List>
    </Grid>
  );
}

export default Lista;
