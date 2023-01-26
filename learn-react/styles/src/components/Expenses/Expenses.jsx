import React, {useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {

	const [filteredYear, setFilteredYear] = useState("2023");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	
	const filtredExpenses = props.items.filter(exp => exp.date.getFullYear() == filteredYear);

	// var expensesContent = <p>No Expnses found.</p>;

	// if (filtredExpenses.length > 0) {
	// 	expensesContent = filtredExpenses.map((exp) => (
	// 		<ExpenseItem
	// 			title={exp.title}
	// 			amount={exp.amount}
	// 			date={exp.date}
	// 			key={exp.id}
	// 		/>
	// 	)); 
	// }
	
	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{/* {filtredExpenses.length == 0 ? <p>No Expnses found.</p> : filtredExpenses.map((exp) => (<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id} />))} */}
			{/* {!filtredExpenses.length && <p>No Expnses found.</p>}; */}
			{/* {filtredExpenses.length && filtredExpenses.map((exp) => (<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id}/>))} */}
			{/* {expensesContent} */}
			<ExpensesChart expenses={filtredExpenses} />
			<ExpensesList items={filtredExpenses}></ExpensesList>
		</Card>
	);
}
