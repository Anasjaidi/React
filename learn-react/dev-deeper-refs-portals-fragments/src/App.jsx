import React from 'react'
import './App.css'
import Wrapper from './components/Helpers/Wrapper'
import img1 from "./../../../../../Desktop/IMG20210510152317.jpg";
import img2 from "./../../../../../Desktop/IMG20210510152324.jpg";

function App() {
  return (
    <Wrapper className="App">
      <h2>anas jaidi</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iusto, recusandae, magnam, consequatur consequuntur cum magni assumenda esse repellendus doloremque aut placeat beatae provident repudiandae quasi iure explicabo sequi! Quod!</p>
    <React.Fragment>
      <img src={img1} alt="" width="200"/>
    </React.Fragment>
    <>
      <img src={img2} alt="" width="200"/>
    </>
    </Wrapper>
  )
}

export default App
