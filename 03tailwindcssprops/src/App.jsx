import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"rakhi",
    age:21
  }
  let myArr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-950 text-rose-50 rounded-xl p-5 mb-3'>Tailwind test</h1>
     <Card Username="Rakhi" btnNext="Click me"/>
     <Card Username="Priya" btnNext="Visit me"/>
    </>
  )
}

export default App
