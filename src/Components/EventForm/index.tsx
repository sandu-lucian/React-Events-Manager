import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.css';
import { IEvent } from '../EventsList/EventItem';

export type Props = {
	onSubmit: (event: IEvent) => void;
};

const initialState = {
	title: '',
	date: '',
	description: ''
};

function EventForm(props: Props) {
	const [formData, setFormData] = useState(initialState);

	const handleSubmit = () => props.onSubmit(formData);

	const handleChange = (event: any) =>
		setFormData({ ...formData, [event.target.name]: event.target.value });

	ValidatorForm.addValidationRule(
		'isValidTitle',
		value => !!(value.length > 5)
	);

	ValidatorForm.addValidationRule(
		'isValidDescription',
		value => !!(value.length < 20)
	);

	return (
		<ValidatorForm
			onSubmit={handleSubmit}
			onError={errors => console.log(errors)}
		>
			<TextValidator
				fullWidth
				variant="outlined"
				label="Title"
				onChange={handleChange}
				name="title"
				value={formData.title}
				validators={['required', 'isValidTitle']}
				errorMessages={[
					'this field is required',
					'Minimum 5 characters needed'
				]}
			/>

			<TextField
				fullWidth
				variant="outlined"
				type="date"
				label="Date"
				required
				onChange={handleChange}
				name="date"
				value={formData.date}
			/>

			<TextValidator
				fullWidth
				variant="outlined"
				label="Description"
				onChange={handleChange}
				name="description"
				value={formData.description}
				validators={['isValidDescription']}
				errorMessages={['Maximum 20 characters allowed']}
			/>

			<Button onClick={() => setFormData({ ...initialState })}>Clear</Button>
			<Button type="submit">Save</Button>
		</ValidatorForm>
	);
}

export default EventForm;
