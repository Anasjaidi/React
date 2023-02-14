import { useState, useEffect } from "react";
import "./App.css";
import Demo from "./components/demo/Demo";

/**
 * the app gonna re-evaluated all of the elemnts if state is changes inside the app and if inside another wrapper all child of this wrapper gonna re-evaluate
 */

function App() {
	const [show, setShow] = useState(false);

  console.log("App running")
	return (
		<div className="App">
			<h1>Hi, There!</h1>
			{show && <p>Hello again.</p>}
			<Demo show={false}></Demo>
      <button onClick={() => setShow(prec => !prec)}>click</button>
		</div>
	);
}

export default App;
