import moment from "moment";
import React from "react";
import { IEvent } from "../../EventsList/EventItem";

type Props = {
  item: IEvent;
};

const FinalEventItem = (props: Props) => {
  return (
    <div>{`${props.item.title} in ${props.item.location.region}, ${
      props.item.location.country
    } on ${moment(props.item.date).format("MMMM Do YYYY")}`}</div>
  );
};

export default FinalEventItem;
