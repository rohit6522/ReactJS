import { useState } from "react"

const Counter = () =>{
  const[count,setCount] = useState(1);

  const handleInc = () =>{
    setCount(count+1);
  }

  const handleDec = () =>{
    setCount(count-1);
  }

  const handleZero = () =>{
    setCount(0);
  }

  return(
    <div>
      <h1 className="text-2xl font-bold text-center">Counter</h1>
      <h2 className="bg-amber-300 text-white px-3 rounded-2xl m-2 py-1 text-center">Counter Status :- {count}</h2>
      <button onClick={handleInc}  className="bg-green-500 text-white px-3 py-1 m-2 rounded">Click Me</button> 
      <button onClick={handleDec}  className="bg-red-500 text-white px-3 py-1 m-2 rounded">Don't Touch</button> 
      <button onClick={handleZero} className="bg-gray-600 text-white px-3 py-1 m-2 rounded">Reset Me</button>
    </div>
  )
}


export default Counter;