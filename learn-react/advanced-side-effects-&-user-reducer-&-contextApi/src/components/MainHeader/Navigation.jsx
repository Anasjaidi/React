import React from 'react';

import classes from './Navigation.module.css';

import ContextData from '../../context/ContextData';

const Navigation = (props) => {
  return (
		<ContextData.Consumer>
			<nav className={classes.nav}>
				<ul>
					{props.isLoggedIn && (
						<li>
							<a href="/">Users</a>
						</li>
					)}
					{props.isLoggedIn && (
						<li>
							<a href="/">Admin</a>
						</li>
					)}
					{props.isLoggedIn && (
						<li>
							<button onClick={props.onLogout}>Logout</button>
						</li>
					)}
				</ul>
			</nav>
		</ContextData.Consumer>
	);
};

export default Navigation;
