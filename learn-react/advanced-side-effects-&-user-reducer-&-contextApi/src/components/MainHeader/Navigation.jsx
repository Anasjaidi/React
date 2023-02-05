import React, {useContext} from "react";

import classes from "./Navigation.module.css";

import ContextData from "../../context/ContextData";

const Navigation = () => {
  const ctx = useContext(ContextData);
	return (
		// <ContextData.Consumer>
		// 	{(ctx) => {
		// 		return (
					<nav className={classes.nav}>
						<ul>
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Users</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Admin</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<button onClick={ctx.onLogout}>Logout</button>
								</li>
							)}
						</ul>
					</nav>
		// 		);
		// 	}}
		// </ContextData.Consumer>
	);
};

export default Navigation;
