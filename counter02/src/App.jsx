import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(4)
 const addValue=()=>{
  if(count<20)
  {
  setCount(count+1)
  }
  console.log(count)
 }
  return (
    <>
      <h1>Code With Ansh</h1>
      <h2>Counter Value : {count}</h2>
      <button
      onClick={addValue}
      >Add Value {count}</button>
      <br />
      <br />
      <button
      onClick={()=>{return count>0?setCount(count-1):count}}
      >Remove Value {count}</button>
    </>
  )
}

export default App
