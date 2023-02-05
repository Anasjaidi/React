import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormClass = styled.div`
		margin: 0.5rem 0;

	& label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
		color: ${props => props.valid ? 'black' : 'red'}
	}

	& input {
		display: block;
		width: 100%;
		border: 1px solid ${props => props.valid ?'#ccc' : 'red'};
		background-color : ${props => props.valid ? 'transparent' : 'red'}
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
	}

	& input:focus {
		outline: none;
		background: #fad0ec;
		border-color: #8b005d;
	}
`;

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);
	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) setIsValid(true);
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
		setEnteredValue("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<FormClass valid={isValid}>
				<label
				>
          {/* // style={{ color: isValid ? "black" : "red" }} */}
					Course Goal
				</label>
				<input
					// style={{
					// 	borderColor: isValid ? "black" : "red",
					// 	background: isValid ? "transparent" : "salmon",
					// }}
					type="text"
					onChange={goalInputChangeHandler}
					value={enteredValue}
				/>
			</FormClass>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
