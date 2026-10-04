import User from "../User";

export default function ReuseComp() {
  const userData = [
    { name: "Rohit", age: 23, email: "rk123@gmail.com", id: 1 },
    { name: "Op Sing", age: 24, email: "op123@gmail.com", id: 2 },
    { name: "Ajju", age: 23, email: "ajju123@gmail.com", id: 3 }
  ];

  return (
    <div>
      <h1>Reuse Component in Loop</h1>

      {userData.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}