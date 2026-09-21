


export default function User({user="I am not there"}) {
  // console.log(Name)
  return (
    <div>
      <hr />
      <h1>User Componenet
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
      </h1>

    </div>
  )
}


