import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import ErrorModalStyles from "../UI/ErrorModal.module.css";

import styles from "./NewUser.module.css";

const AddUser = (props) => {
	const [entredUsername, setEntredUsername] = useState("");
	const [entredaAge, setEntredaAge] = useState("");

	const usernameChangeHandler = (e) => {
		setEntredUsername(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setEntredaAge(e.target.value);
	};

	const addNewUser = (e) => {
		e.preventDefault();
		if (entredaAge.trim().length === 0 || entredUsername.trim().length === 0)
			return;
		if (+entredaAge < 1) return;
		props.addNewUser({
			name: entredUsername,
			age: entredaAge,
			id: Math.random().toString(),
		});
		setEntredUsername("");
		setEntredaAge("");
	};

	return (
		<div>
			<div className={ErrorModalStyles.backdrop}></div>
			<ErrorModal title="something" content="badly going wrong" />
			<Card className={styles.input}>
				<form onSubmit={addNewUser}>
					<label htmlFor="username">username</label>
					<input
						type="text"
						id="username"
						value={entredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">age (years)</label>
					<input
						type="number"
						id="age"
						value={entredaAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">add new user</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
