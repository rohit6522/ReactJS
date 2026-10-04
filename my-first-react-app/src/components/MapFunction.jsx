
export default function MapFunction() {
  const userData = [
    {
      name: "Rohit",
      age: 23,
      email: "rk123@gmail.com",
      id: 1
    },
    {
      name: "Op Sing",
      age: 24,
      email: "op123@gmail.com",
      id: 2
    },
    {
      name: "Ajju",
      age: 23,
      email: "ajju123@gmail.com",
      id: 3
    }
  ];

  return (
    <div>
      <hr />

      <h1>Loop in JSX With Map Function</h1>

      <table border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}
