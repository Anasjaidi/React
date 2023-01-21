import React from "react";
import './ExpenseForm.css'
import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const titleChangeHandler = e => {
    setTitle(e.target.value);
  }
  const amountChangeHandler = e => {
    setTitle(e.target.value);
  }
  const dateChangeHandler = e => {
    setTitle(e.target.value);
  }

	return (
		<form>
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
