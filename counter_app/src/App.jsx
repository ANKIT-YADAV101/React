import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
      setMessage(""); // Reset message
    } else {
      setMessage("Value cannot go above 20!");
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage(""); // Reset message
    } else {
      setMessage("Value cannot go below 0!");
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
      <button onClick={addValue}>Increment By 1</button>
      <button onClick={removeValue}>Decrement By 1</button>
    </>
  );
}

export default App;

