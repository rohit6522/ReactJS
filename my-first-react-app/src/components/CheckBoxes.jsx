import { useState } from "react"

export default function CheckBoxes(){

  const [skills,setSkills] = useState([])
  const handleSkills=()=>{
    console.log(event.target.value,event.target.checked);

    if(event.target.checked){
      setSkills(event.target.value)
    }
  }


  return(
    <div>
      <h3>Select Your Skills</h3>

      <input onChange={handleSkills} type="checkbox" id="java" value='java'/>
      <label htmlFor="java">java</label>
      <br />

      <input onChange={handleSkills} type="checkbox" id="java" value='py'/>
      <label htmlFor="py">Python</label>
      <br />

      <input onChange={handleSkills} type="checkbox" id="java" value='c'/>
      <label htmlFor="c">C</label>
      <br />

      <input onChange={handleSkills} type="checkbox" id="sql" value='java'/>
      <label htmlFor="sql">SQl</label>

      <h1>{skills.toString()}</h1>
    </div>
    
  )
}