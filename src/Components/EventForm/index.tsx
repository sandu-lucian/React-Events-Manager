import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from "@material-ui/core/TextField";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { IEvent } from "../EventsList/EventItem";
import moment from "moment";

export type Props = {
  onSubmit: (event: IEvent) => void;
};

const initialState = {
  title: "",
  date: "",
  description: "",
};

function EventForm(props: Props) {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = () => {
    props.onSubmit(formData);
    setFormData({ ...initialState });
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target);
  };

  const handleDateChange = (date: any) => {
    const searchDate = moment(date).isValid()
      ? moment(date).format("YYYY-MM-DD")
      : "";

    setFormData({ ...formData, date: searchDate });

    console.log(formData, searchDate);
  };

  ValidatorForm.addValidationRule(
    "isValidTitle",
    (value) => !!(value.length >= 5)
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

      {/* <TextField
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        variant="outlined"
        type="date"
        label="Date"
        required
        onChange={handleChange}
        name="date"
        value={formData.date}
      /> */}

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          fullWidth
          inputVariant="outlined"
          label="Date"
          name="date"
          format="DD-MM-YYYY"
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
}

export default EventForm;
