import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 


function App() {
  
  const [counter,setCounter]=useState(15)

  const addValue=()=>{
    console.log("clicked",counter);
    if (counter>19){
      return;
    }
    setCounter(counter+1)

  }
  const removeValue=()=>{
    if(counter<=0)
    {
      return;
    }
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <br/>
      <footer>{counter}</footer>
    </>
  )
}

export default App
