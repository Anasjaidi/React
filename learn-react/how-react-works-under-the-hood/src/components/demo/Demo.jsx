import React from 'react'
import P from '../UI/P'

const Demo = (props) => {
  console.log("DEMO running");
  return (
    <P>{props.show ? "Demo" : null}</P>
  )
}

export default Demo