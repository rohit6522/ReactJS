import { useEffect, useState } from "react"

export default function Clock(){

  const [time,setTime] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000);
  },[])

  return(
    <div>
      <h1>Digital Clock</h1>
      <p>{time}</p>

    </div>
  )
}