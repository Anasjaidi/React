import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';

import ContextData from '../../context/ContextData';

const Home = (props) => {
	const ctx = useContext(ContextData);
  return (
		<Card className={classes.home}>
			<h1 style={{color: 'black'}}>Welcome back!</h1>
			<Button onClick={ctx.onLogout}>LogOut</Button>
		</Card>
	);
};

export default Home;
