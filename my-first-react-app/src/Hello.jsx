// import "./Hello.css";


// export default function Hello(props) {

//   let component;
//   let toggle = true;
//   let isLoggedIn = false;
//   let greet = true;

//   if (toggle) {
//     component = <h3 className="toggle-on">Hello, toggle is ON</h3>;
//   } else {
//     component = <h3 className="toggle-off">Hello, toggle is OFF</h3>;
//   }

//   function callFun(){
//     alert("Hello hru")
//   }


//   return (
//     <>
//       <h2>Name : {props.name}</h2>
//       <h2>Age : {props.age}</h2>

//       {component}

//       {isLoggedIn? <h3>Welcome you are login</h3>:<h3>Please Signup First</h3>}

//       {greet && <h2>Hii this is logical op...</h2> }

//       <button onClick={callFun}>Call Me</button>

//     </>
//   )
// }