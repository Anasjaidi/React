import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import Demo from "./components/demo/Demo";
import Button from "./components/UI/Button";

/**
 * the app gonna re-evaluated all of the elemnts if state is changes inside the app and if inside another wrapper all child of this wrapper gonna re-evaluate
 */

function App() {
	const [show, setShow] = useState(false);
  const buttonClickhandler = useCallback(() => {setShow(prec => !prec);}, [])
  const nums = useMemo(() => [1,2,3,45], [])
  console.log("App running", show)
	return (
		<div className="App">
			<h1>Hi, There!</h1>
			{/* {show && <p>Hello again.</p>} */}
			<Demo show={false}></Demo>
      <Button onClickHandler={buttonClickhandler}>click</Button>
		</div>
	);
}

export default App;
