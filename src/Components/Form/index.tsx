import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./styles.css";

export type Handlers = {
  onSubmit: (data: {
    title: string;
    date: string;
    description: string;
  }) => void;
};

function Form(props: Handlers) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleSubmit = () => {
    props.onSubmit(formData);
  };

  ValidatorForm.addValidationRule("isValidTitle", (value) =>
    value.length < 5 ? false : true
  );

  ValidatorForm.addValidationRule("isValidDescription", (value) =>
    value.length > 20 ? false : true
  );

  return (
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <TextValidator
        fullWidth
        variant="outlined"
        label="Title"
        onChange={(e) => {
          const element = e.currentTarget as HTMLInputElement;
          const value = element.value;

          setFormData({
            title: value,
            date: formData.date,
            description: formData.description,
          });
        }}
        name="title"
        value={formData.title}
        validators={["required", "isValidTitle"]}
        errorMessages={[
          "this field is required",
          "Minimum 5 characters needed",
        ]}
      />

      <TextField
        fullWidth
        variant="outlined"
        type="date"
        label="Date"
        required
        onChange={(e) => {
          const element = e.currentTarget as HTMLInputElement;
          const value = element.value;

          setFormData({
            title: formData.title,
            date: value.toString(),
            description: formData.description,
          });
        }}
        name="date"
        value={formData.date}
      />

      <TextValidator
        fullWidth
        variant="outlined"
        label="Description"
        onChange={(e) => {
          const element = e.currentTarget as HTMLInputElement;
          const value = element.value;

          setFormData({
            title: formData.title,
            date: formData.date,
            description: value,
          });
        }}
        name="description"
        value={formData.description}
        validators={["isValidDescription"]}
        errorMessages={["Maximum 20 characters allowed"]}
      />

      <Button
        onClick={() => setFormData({ title: "", date: "", description: "" })}
      >
        Clear
      </Button>
      <Button type="submit">Save</Button>
    </ValidatorForm>
  );
}

export default Form;
