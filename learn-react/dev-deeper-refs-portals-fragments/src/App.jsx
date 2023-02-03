import React, {useState} from 'react'
import './App.css'
import Wrapper from './components/Helpers/Wrapper'
import img1 from "./../../../../../Desktop/IMG20210510152317.jpg";
import img2 from "./../../../../../Desktop/IMG20210510152324.jpg";
import ErrorModal from './components/ErrorModal';
import Login from './components/Login';


function App() {
  const [error, seterror] = useState();
  const modalButtonhandler = e => {
    seterror(undefined)
  }
  const loginButtonhandler = e => {
    console.log(e)
    seterror(1)
  }
  return (
    <Wrapper className="App">
      <h2>anas jaidi</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iusto, recusandae, magnam, consequatur consequuntur cum magni assumenda esse repellendus doloremque aut placeat beatae provident repudiandae quasi iure explicabo sequi! Quod!</p>
    <React.Fragment>
      <img src={img1} alt="" width="200" onClick={_ => seterror(1)}/>
    </React.Fragment>
    <>
      <img src={img2} alt="" width="200"/>
    </>
    <>
      {error && <ErrorModal onClick={modalButtonhandler}/>}
    </>
    <Login onClick={loginButtonhandler}/>
    </Wrapper>
  )
}

export default App
