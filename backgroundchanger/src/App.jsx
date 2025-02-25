import { useState } from "react"


function App() {
  
  const [color,setColor]=useState("violet")
  return (
    <div className=" w-full h-screen bg-gray-200" 
    style={{backgroundColor:color}}> 

    <div className="flex justify-center flex-wrap bottom-13 items-center h-full">
  <div className="flex justify-center items-center flex-wrap gap-3 bg-white shadow-lg rounded-xl" >
    <button className="px-4 outline-none"
    style={{backgroundColor:"red"}}
    onClick={()=>setColor("red")}>Red</button>

<button className="px-4 outline-none"
    style={{backgroundColor:"blue"}}
    onClick={()=>setColor("blue")}>Blue</button>

<button className="px-4 outline-none"
    style={{backgroundColor:"yellow"}}
    onClick={()=>setColor("yellow")}>Yellow</button>

<button className="px-4 outline-none"
    style={{backgroundColor:"green"}}
    onClick={()=>setColor("green")}>Green</button>

<button className="px-4 outline-none"
    style={{backgroundColor:"purple"}}
    onClick={()=>setColor("purple")}>Purple</button>
    </div>
      </div>
    </div>
  )
}

export default App
