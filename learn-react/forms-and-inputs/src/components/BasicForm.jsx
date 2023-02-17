import useInput from "../hooks/useInput";

const classIsValid = (b) => (b ? "form-control" : "form-control invalid");

const showErr = (hasErr, err) =>
	hasErr ? <p className="error-text">{err}</p> : null;


const isEmpty = text => text.trim() !== ''
const isEmail = text => text.includes('@')

const BasicForm = (props) => {
	const {
		value: firstNameInputvalue,
		isValid: firstNameValueIsValid,
		hasErr: firstNameInputIsInvalid,
		reset: firstNameInputReset,
		changeHandler: firstNameInputChangeHandler,
		blurHandler: firstNameInputBlurHandler,
	} = useInput(isEmpty);
	const {
		value: lastNameInputvalue,
		isValid: lastNameValueIsValid,
		hasErr: lastNameInputIsInvalid,
		reset: lastNameInputReset,
		changeHandler: lastNameInputChangeHandler,
		blurHandler: lastNameInputBlurHandler,
	} = useInput(isEmpty);
	const {
		value: emailInputvalue,
		isValid: emailValueIsValid,
		hasErr: emailInputIsInvalid,
		reset: emailInputReset,
		changeHandler: emailInputChangeHandler,
		blurHandler: emailInputBlurHandler,
	} = useInput(isEmail);

	const formIsValid =
		emailValueIsValid && firstNameValueIsValid && lastNameValueIsValid;

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) return;

		firstNameInputReset();
		lastNameInputReset();
		emailInputReset();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div>
				<div className={classIsValid(!firstNameInputIsInvalid)}>
					<label htmlFor="first-name">First Name</label>
					<input
						type="text"
						id="fisrt-name"
						value={firstNameInputvalue}
						onChange={firstNameInputChangeHandler}
						onBlur={firstNameInputBlurHandler}
					/>
					{showErr(firstNameInputIsInvalid, "first name is empty")}
				</div>
				<div className={classIsValid(!lastNameInputIsInvalid)}>
					<label htmlFor="last-name">Last Name</label>
					<input
						type="text"
						id="last-name"
						value={lastNameInputvalue}
						onChange={lastNameInputChangeHandler}
						onBlur={lastNameInputBlurHandler}
					/>
					{showErr(lastNameInputIsInvalid, "last name is empty")}
				</div>
			</div>
			<div className={classIsValid(!emailInputIsInvalid)}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="email"
					id="email"
					value={emailInputvalue}
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
				/>
				{showErr(emailInputIsInvalid, "mail is not valid")}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
