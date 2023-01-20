import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";

export default function Expenses() {
	const expenses = [
		{ title: "expense #1", amount: 247.65, date: new Date() },
		{ title: "expense #2", amount: 352.45, date: new Date() },
		{ title: "expense #3", amount: 987.68, date: new Date() },
	];

	return (
		<Card className="expenses">
			{expenses.map((exp) => (
				<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />
			))}
		</Card>
	);
}
