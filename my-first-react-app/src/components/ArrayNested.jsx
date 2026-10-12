

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
      <h1>Nested Looping</h1>
      {
        collegeData.map((college,index)=>{
          <div key={index}>
            <h1>Name: {college.name}</h1>
          </div>
        })
      }
    </div>
  )
}