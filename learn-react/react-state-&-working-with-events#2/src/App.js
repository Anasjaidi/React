import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
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
	}
	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses/ >
		</div>
	);
}

export default App;
