import ExpenseItem from "./components/ExpenseItem";

function App() {
	const expenses = [
		{ title: "expense #1", amount: 247.65, date: new Date() },
		{ title: "expense #2", amount: 352.45, date: new Date() },
		{ title: "expense #3", amount: 987.68, date: new Date() },
	];

	return (
		<div className="App">
			{expenses.map((exp) => {
				return (
					<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />
				);
			})}
		</div>
	);
}

export default App;
