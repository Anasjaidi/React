import React from 'react'
import { useRef } from 'react'
const Login = props => {
  let user = useRef();
  let password = useRef();
  const loginButtonHandler = e => {
    props.onClick({username: user.current.value, password: password.current.value})
  }
  return (
    <>
    <h2>Login In</h2>
    <div><label htmlFor="user">username:</label><input ref={user} type="text" id='user' /></div>
    <div><label htmlFor="password">password:</label><input ref={password} type="password" id='password' /></div>
    <div>
      <button onClick={loginButtonHandler}>LoginIn</button>
    </div>
    </>
  )
}


export default Login