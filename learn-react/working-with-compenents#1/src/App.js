import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

function App() {
	// Jsx under the hood 
	// 1) element string if it html elemnt
	// 2) options like: classname or props
	// 3) child element
	return React.createElement(
		"div",
		{ className: "App" },
		React.createElement(Expenses, {})
	);
	// return (
	// 	<div className="App">
	// 		<Expenses/ >
	// 	</div>
	// );
}

export default App;
