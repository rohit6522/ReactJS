
import { useState, useSyncExternalStore } from "react";
import User from "./User";
import Card from "./components/card";
// import Counter from "./components/Counter";
import Student from "./components/Student";
import College from "./components/College";
import Wrapper from "./components/Wrapper";
import CheckBoxes from "./components/CheckBoxes";
import Radio from "./components/Radio";
import MapFunction from "./components/MapFunction";
// import Effect from "./components/Effect";

export default function App() {
  const [fruit, setFruit] = useState("Apple");
  const [student, setStudent] = useState();
  // const [value, setValue] = useState("Rohit Kumar");

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleFruit = () => {
    setFruit("Orange");
  };

  const userObject = {
    name: "Rohit Kumar",
    age: 20,
    email: "rk123@gmail.com",
  };

  const userObject1 = {
    name: "Rohit Kumar",
    age: 20,
    email: "rk123@gmail.com",
  };

  const collegeName = ["IET", "LPU", "CU"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl space-y-8">

        <h2 className="rounded-xl bg-gray-800 px-6 py-4 text-center text-4xl font-bold text-white">
          Props in React
        </h2>

        <section className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            User Props
          </h3>

          <div className="space-y-3">
            <User user={userObject} />
            <User user={userObject1} />
            <User />
          </div>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Student
          </h3>

          {student && (
            <Student name={student} />
          )}

          <button
            onClick={() => setStudent("Bhasker Gandu")}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Update Student Name
          </button>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            College
          </h3>

          <College name={collegeName[1]} />
        </section>

        <section className="space-y-4">
          <Wrapper color="orange">
            <h1 className="text-xl font-bold">
              Hello Wrapper
            </h1>
          </Wrapper>

          <Wrapper color="red">
            <h1 className="text-xl font-bold">
              Hello Admin
            </h1>
          </Wrapper>
        </section>

        {/* <Counter /> */}

        {/* <Effect /> */}

        <section className="rounded-xl bg-white p-6 text-center shadow-md">
          <h3 className="mb-4 text-2xl font-bold">
            Fruit: <span className="text-green-600">{fruit}</span>
          </h3>

          <button
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
            onClick={handleFruit}
          >
            Change Fruit Name
          </button>
        </section>

        <Card />

        {/* <section className="rounded-xl bg-white p-6 shadow-md">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Get Input Field
          </h1>

          <input
            onChange={(event) => setValue(event.target.value)}
            value={value}
            type="text"
            placeholder="Enter user name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <p className="mt-4 text-lg font-semibold text-gray-700">
            Value: {value}
          </p>

          <button
            onClick={() => setValue("")}
            className="mt-3 rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
          >
            Clear Value
          </button>
        </section> */}

        <section>

          <h1>Controlled Components</h1>
          <form action="" method="get">
            <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
            <br />
            <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Enter Ur Pass" />
            <br />
            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter ut Emai;" /> <br />

            <button >Submit</button> <br />
            <button onClick={() => { setEmail(''); setName(''); setPassword('') }}>clear</button>


            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{email}</h3>
          </form>

        </section>


        <CheckBoxes />

        <Radio />

        <MapFunction />
      </div>


    </div>
  );
}
