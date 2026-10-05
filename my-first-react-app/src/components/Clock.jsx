import { useEffect, useState } from "react"

export default function Clock({color}) {

  const [time, setTime] = useState(0);


  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
  }, [])

  return (
    <div>
     
      <h1
      style={{color:'gray',backgroundColor:'yellow', width:'120px', borderRadius:'25px',fontSize:'20px',padding:'3px'}}
      >Digital Clock</h1>
      <p 
      style={{color:color,backgroundColor:'#000',width:'120px',padding:'5px',borderRadius:'25px',fontSize:'22px'}}
      >{time}</p>

    </div>
  )
}