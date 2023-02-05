import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import ContextData from "./context/ContextData";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem("loged", "true");
		setIsLoggedIn(true);
	};

	useEffect((e) => {
		let localLog = JSON.parse(localStorage.getItem("loged"));
		if (localLog) {
			setIsLoggedIn(true);
		}
	}, []);
	const logoutHandler = () => {
		localStorage.setItem("loged", "false");
		setIsLoggedIn(false);
	};

	return (
		// <React.Fragment>
		<ContextData.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			<MainHeader />
			<main>
				{!isLoggedIn && <Login />}
				{isLoggedIn && <Home />}
			</main>
		</ContextData.Provider>
		// </React.Fragment>
	);
}

export default App;
