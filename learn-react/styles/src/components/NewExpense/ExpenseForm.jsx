import React from "react";
import './ExpenseForm.css'
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
	// const [state, setstate] = useState({
	// 	title: '',
	// 	amount: '',
	// 	date: '',
	// });
  const titleChangeHandler = e => {
		setTitle(e.target.value);
    // setstate({...state, title: e.target.value});
    // setstate(prevState => {return {...prevState, title: e.target.value}});
  }
  const amountChangeHandler = e => {
		setAmount(e.target.value);
		// setstate({...state, amount: e.target.value});
		// setstate(prevState => {return {...prevState, amount: e.target.value}});
  }
  const dateChangeHandler = e => {
		setDate(e.target.value);
		// setstate({...state, date: e.target.value});
		// setstate(prevState => {return {...prevState, date: e.target.value}});
  }

	const submitHandler = e => {
		e.preventDefault();
		const newExpense = {
			title,
			amount,
			date: new Date(date)
		}
		setTitle('');
		setAmount('');
		setDate('');
		props.onAddExpense(newExpense)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} value={title} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" onChange={amountChangeHandler} value={amount} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" onChange={dateChangeHandler} value={date} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
