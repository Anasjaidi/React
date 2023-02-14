import { useState, useEffect } from 'react'
import './App.css'
import Demo from './components/demo/Demo';

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 5000);
    return () => {
    };
  }, []);

  return (
    /**
     * the app gonna re-evaluated all of the elemnts if state is changes inside the app and if inside another wrapper all child of this wrapper gonna re-evaluate
    */
    <div className="App">
      <h1>Hi, There!</h1>
      {show && <p>Hello again.</p>}
      <Demo show={show}></Demo>
    </div>
  )
}

export default App
