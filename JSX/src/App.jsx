import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let greeting = ()=>{
      let name = "kartik"
      let date = new Date()
      let time = date.toLocaleTimeString()

      return(`Hello guys, my name is ${name} and time is ${time}`);
      
  }

  return (
    <>
     <h1>{greeting()}</h1>
    </>
  )
}

export default App
