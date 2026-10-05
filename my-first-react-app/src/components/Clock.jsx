import { useEffect, useState } from "react"

export default function Clock() {

  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
  }, [])

  return (
    <div>
      <select name="" id="" style={{color:'red'}}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="gray">Gray</option>
        <option value="yellow">Yellow</option>
      </select>
      <h1
      style={{color:'gray',backgroundColor:'yellow', width:'120px', borderRadius:'25px',fontSize:'20px',padding:'3px'}}
      >Digital Clock</h1>
      <p 
      style={{color:'red',backgroundColor:'#000',width:'120px',padding:'5px',borderRadius:'25px',fontSize:'22px'}}
      >{time}</p>

    </div>
  )
}