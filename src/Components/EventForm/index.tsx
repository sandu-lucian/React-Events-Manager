import React, { useEffect, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { IEvent } from "../EventsList/EventItem";
import moment from "moment";
import { Chance } from "chance";

const chance = new Chance();

type Props = {
  onSubmit: (event: IEvent) => void;
  itemToEdit: IEvent;
};

const initialState = {
  title: "",
  date: moment(new Date()).format("YYYY-MM-DD"),
  description: "",
  id: chance.guid(),
};

const EventForm = (props: Props) => {
  const [formData, setFormData] = useState(props.itemToEdit || initialState);

  const handleSubmit = () => {
    props.onSubmit(formData);
    setFormData({ ...initialState, id: chance.guid() });
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date: any) => {
    const searchDate = moment(date).isValid()
      ? moment(date).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");

    setFormData({ ...formData, date: searchDate });
  };

  useEffect(() => {
    setFormData(props.itemToEdit);
  }, [props.itemToEdit]);

  ValidatorForm.addValidationRule(
    "isValidTitle",
    (value) => !!(value.length >= 5 || value === "")
  );

  ValidatorForm.addValidationRule(
    "isValidDescription",
    (value) => !!(value.length <= 20)
  );

  return (
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <TextValidator
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        variant="outlined"
        label="Title"
        onChange={handleChange}
        name="title"
        value={formData.title}
        required
        validators={["required", "isValidTitle"]}
        errorMessages={[
          "this field is required",
          "Minimum 5 characters needed",
        ]}
      />

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          fullWidth
          inputVariant="outlined"
          label="Date"
          name="date"
          format="YYYY-MM-DD"
          value={formData.date}
          onChange={handleDateChange}
          variant="dialog"
          animateYearScrolling
          disablePast
          required
        />
      </MuiPickersUtilsProvider>

      <TextValidator
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        variant="outlined"
        label="Description"
        onChange={handleChange}
        name="description"
        value={formData.description}
        validators={["isValidDescription"]}
        errorMessages={["Maximum 20 characters allowed"]}
      />

      <Button onClick={() => setFormData({ ...initialState })}>Clear</Button>
      <Button type="submit">Save</Button>
    </ValidatorForm>
  );
};

export default EventForm;
