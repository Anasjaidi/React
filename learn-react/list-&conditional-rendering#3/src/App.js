import React, {useState} from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const [expenses, setExpenses] = useState([
		{ title: "expense #1", amount: 247.65, date: new Date(), id:"e1" },
		{ title: "expense #2", amount: 352.45, date: new Date(), id:"e2" },
		{ title: "expense #3", amount: 987.68, date: new Date(), id:"e3" },
	]);
	// Jsx under the hood 
	// 1) element string if it html elemnt
	// 2) options like: classname or props
	// 3) child element
	// return React.createElement(
	// 	"div",
	// 	{ className: "App" },
	// 	React.createElement(Expenses, {})
	// );
	const addExpenseHandler = expense => {
		console.log(expense)
		setExpenses(prevExpenses => [ expense, ...prevExpenses ])
	}
	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
