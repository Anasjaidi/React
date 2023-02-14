import { useState, useEffect } from 'react'
import './App.css'

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
    <div className="App">
      <h1>Hi, There!</h1>
      {show && <p>Hello again.</p>}
    </div>
  )
}

export default App
