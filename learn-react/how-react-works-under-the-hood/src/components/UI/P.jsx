import React from 'react'

const P = ({children}) => {
  console.log("PAR running");
  return (
    <p>{children}</p>
  )
}

export default P