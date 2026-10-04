export default function User({ user }) {
  return (
    <div>
      <h2>Name: <span   style={{color:'green'}}> {user.name} </span></h2> 
      <h2>Age: <span   style={{color:'green'}}> {user.age} </span></h2>
      <h2>Email: <span   style={{color:'green'}}> {user.email} </span></h2>
      <hr />
    </div>
  );
}