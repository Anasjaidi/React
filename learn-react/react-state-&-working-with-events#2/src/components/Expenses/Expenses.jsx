import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses() {
	const expenses = [
		{ title: "expense #1", amount: 247.65, date: new Date() },
		{ title: "expense #2", amount: 352.45, date: new Date() },
		{ title: "expense #3", amount: 987.68, date: new Date() },
	];
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		console.log(selectedYear);
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expenses.map((exp) => (
				<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />
			))}
		</Card>
	);
}
