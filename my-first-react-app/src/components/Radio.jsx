import { useState } from "react"

export default function Radio(){

  const [gender,setGender]=useState('female');


  return(
    <div>
      <h1>Handle Radio and DropDown</h1>
      <h4>Select Gender</h4>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="male" value="male" />
       <label htmlFor="male">Male</label>
      <input type="radio"  onChange={(event)=>setGender(event.target.value)}  name="gender" id="female" value="female" />
      <label htmlFor="female">Female</label> 

      <h3>Selected gender :{gender}</h3>
    </div>
  )
}