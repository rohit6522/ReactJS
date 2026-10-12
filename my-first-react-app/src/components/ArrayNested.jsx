
export default function NestedLoop() {
  const collegeData = [
    {
      name: "LPU",
      city: "Phagwara",
      website: "www.iet.com",
      Student: [
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        }
      ]
    },
    {
      name: "Benet",
      city: "New Delhi",
      website: "www.iet.com",
      Student: [
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },
      ]
    },
    {
      name: "CU",
      city: "Chandigarh",
      website: "www.iet.com",
      Student: [
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },
        {
          name: "Rohit Kuamr",
          age: '21',
          email: "abc123@gmail.com"
        },

      ]
    },
  ]
  return (
    <div>
      <h1>Array Nested Looping with component</h1>
      <hr />
      {
        collegeData.map((college, index) => {
          return (
            <div key={index}>
              <h1>Name: {college.name}</h1>

              <ul>
                <li>
                  <h3>City :{college.city}</h3>
                </li>
                <li>
                  <h3>Website: {college.website}</h3>
                </li>

            
                <li>
                  <h3>Students:</h3>
                  {college.Student.map((student, index) => (
                    <div key={index}>
                      Name: {student.name}
                    </div>
                  ))}
                </li>
                <hr />

              </ul>
            </div>
          )
        })
      }
    </div>
  )
}