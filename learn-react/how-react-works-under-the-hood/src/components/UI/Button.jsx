import React from 'react'

const Button = ({children, onClickHandler}) => {
  console.log('button running')
  return (
    <button onClick={onClickHandler}>{children}</button>
  )
}

export default Button