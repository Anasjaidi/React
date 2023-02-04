import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_CHANGE') return ({value: action.val, isValid: action.val.includes('@')})
  else if (action.type === 'EMAIL_BLUR') return ({value: state.value, isValid: state.value.includes('@')})
  return {value: '', isValid: false}
}
const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_CHANGE') return { value: action.val, isValid: action.val.trim().length > 6 };
  else if (action.type === 'PASSWORD_BLUR') return ({value: state.value, isValid: state.value.trim().length > 6})
  return {value: '', isValid: false}
}

const Login = (props) => {
  
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: true} )
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: true} )

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  // useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		console.log("checking!");
	// 		setFormIsValid(
	// 			enteredEmail.includes("@") && enteredPassword.trim().length > 6
	// 		);
	// 	}, 1000);
	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'EMAIL_CHANGE', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'PASSWORD_CHANGE', val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'EMAIL_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!(passwordState.isValid && emailState.isValid)}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
