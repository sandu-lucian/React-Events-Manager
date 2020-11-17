import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import moment from "moment";
import "./styles.css";

export interface IEvent {
  title: string;
  date: string;
  description: string;
  location: { country: string; region: string };
  id: string;
}

type Props = {
  item: IEvent;
  onItemDelete: (id: string) => void;
  onItemEdit: (id: string) => void;
};

const EventRow = (props: Props) => {
  return (
    <TableRow>
      <TableCell>{props.item.title}</TableCell>
      <TableCell align="right">
        {moment(props.item.date).format("MMMM Do YYYY")}
      </TableCell>
      <TableCell align="right">
        {props.item.location.region && props.item.location.country
          ? `${props.item.location.region}, ${props.item.location.country}`
          : null}
      </TableCell>
      <TableCell align="right">{props.item.description}</TableCell>
      <TableCell align="right">
        <IconButton
          aria-label="edit"
          onClick={() => props.onItemEdit(props.item.id)}
        >
          <EditIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          onClick={() => props.onItemDelete(props.item.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default EventRow;
