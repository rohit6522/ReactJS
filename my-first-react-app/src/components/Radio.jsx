import { useState } from "react"

export default function Radio(){

  const [gender,setGender]=useState('female');
  const[city,setCity] = useState('ara');


  return(
    <div>
      <hr />
      <h1>Handle Radio and DropDown</h1> 
      <h4>Select Gender</h4>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="male" value={"male"} checked={gender=='male'}/>


       <label htmlFor="male">Male</label>

      <input type="radio"  onChange={(event)=>setGender(event.target.value)}  name="gender" id="female" value={"female"} checked={gender=='female'}/>


      <label htmlFor="female" >Female</label> 

      <h3>Selected gender :{gender}</h3>
    
    <hr />
    <br />
      <h4>Choose City</h4>
      <select defaultValue={"ara"} onChange={(event)=>setCity(event.target.value)}>
        <option value="noida">Noida</option>
        <option value="bihar">Bihar</option>
        <option value="ara">Ara</option>
      </select>
      <h4>Selected City {city}</h4>
    </div>
  )
}