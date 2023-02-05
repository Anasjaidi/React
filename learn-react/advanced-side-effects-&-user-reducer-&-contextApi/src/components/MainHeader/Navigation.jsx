import React from "react";

import classes from "./Navigation.module.css";

import ContextData from "../../context/ContextData";

const Navigation = (props) => {
	return (
		<ContextData.Consumer>
			{(ctx) => {
				return (
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
									<button onClick={props.onLogout}>Logout</button>
								</li>
							)}
						</ul>
					</nav>
				);
			}}
		</ContextData.Consumer>
	);
};

export default Navigation;
