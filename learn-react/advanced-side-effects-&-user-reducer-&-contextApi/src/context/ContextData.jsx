import React, { useState, useEffect } from "react";

const ContextData = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
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
		<ContextData.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</ContextData.Provider>
	);
};

export default ContextData;
