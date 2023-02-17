import { useState, useRef } from "react";

import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
	const {
		value: nameInputValue,
		hasErr: nameInputIsInvalid,
		blurHandler: nameInputBlurHnadler,
		changeHandler: nameInputChangeHandler,
		reset: nameInputReset,
		isValid: nameValueIsvalid,
	} = useInput();
	const {
		value: emailInputValue,
		hasErr: emailInputIsInvalid,
		blurHandler: emailInputBlurHnadler,
		changeHandler: emailInputChangeHandler,
		reset: emailInputReset,
		isValid: emailValueIsvalid,
	} = useInput();

	const formIsValid = nameValueIsvalid && emailValueIsvalid;

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (nameInputValue.trim() === "" || emailInputValue.trim() === "") {
			return;
		}
		nameInputReset();
		emailInputReset();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={nameInputIsInvalid ? "form-control invalid" : "form-control"}
			>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onBlur={nameInputBlurHnadler}
					onChange={nameInputChangeHandler}
					value={nameInputValue}
				/>
				{nameInputIsInvalid ? (
					<p className="error-text">name is empty</p>
				) : null}
			</div>
			<div
				className={
					emailInputIsInvalid ? "form-control invalid" : "form-control"
				}
			>
				<label htmlFor="email">Your E-mail</label>
				<input
					type="email"
					id="email"
					onBlur={emailInputBlurHnadler}
					onChange={emailInputChangeHandler}
					value={emailInputValue}
				/>
				{emailInputIsInvalid ? (
					<p className="error-text">email is empty</p>
				) : null}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
