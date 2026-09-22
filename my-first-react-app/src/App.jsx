
import { useState } from "react";
import User from "./User";
import Card from "./components/card";
import Counter from "./components/Counter";
import Student from "./components/Student";
import College from "./components/College";
import Wrapper from "./components/Wrapper";
import Effect from "./components/Effect";

export default function App() {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Orange");
  }


  let userObject = {
    name: "Rohit Kumar",
    age: 20,
    email: "rk123@gmail.com"
  }
  let userObject1 = {
    name: "Rohit Kumar",
    age: 20,
    email: "rk123@gmail.com"
  }

  let collegeName = ['IET', 'LPU', 'CU']
    const [student,setStudent] = useState();

  const [value,setValue] = useState("Rohit Kumar");



  return (
    <div>

      <h2 className="text-4xl font-extralight bg-gray-500 text-red-300">Props in React</h2>

      <User user={userObject} />
      <User user={userObject1} />
      <User />

      {student && <Student name={student} />}
      <button onClick={()=>setStudent("Bhasker Gandu")}>Update Student Name:- </button>

      <College name={collegeName[1]} />

      <Wrapper color="orange"> 
      <h1>Hello Wrapper </h1> 
      </Wrapper>

      <Wrapper color="red" > 
      <h1>Hello Admin </h1> 
      </Wrapper>

      <Counter />
      <Effect />

      <h3 className="text-xl font-bold">{fruit}</h3>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={handleFruit}
      >
        Change fruit name
      </button>

      <Card />

      <h1>Get Input Field</h1>
      <input onChange={(event)=>setValue(event.target.value)} value={value} type="text" placeholder="Enter user name" />

      <p>{value}</p>
      <button onClick={()=>{setValue("")}}>Clear Value</button>

    </div>
  );
}