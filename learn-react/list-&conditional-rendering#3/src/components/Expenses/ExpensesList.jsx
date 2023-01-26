import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'


const ExpensesList = props => {

	if (props.items.length === 0) {
		return <p className="expenses-list__fallback">No Expense Found.</p>;
	}

  return (
		<ul className="expenses-list">
			{props.items.map((exp) => (
				<ExpenseItem
					title={exp.title}
					amount={exp.amount}
					date={exp.date}
					key={exp.id}
				/>
			))}
		</ul>
	);
}


export default ExpensesList