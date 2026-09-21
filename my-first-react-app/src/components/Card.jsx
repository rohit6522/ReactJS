import "./Card.css";

const Card = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  const handleSubmit = () => {
    alert("Form Submmit succesfully!");
  };

  return (
    <div className="card-box">
      <h1 className="header">Card Component</h1>

      <img
        className="img"
        src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg"
        alt="Moon robot"
      />

      <p className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloremque, cumque saepe rerum reiciendis sunt hic officia
        ratione sequi sed esse.
      </p>

      <button className="card-button" onClick={handleClick}>
        Click Me
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter any thing " className="bg-amber-200   "/>
        <button className="text-black-400 p-2  text-2xl font-bold rounded-full border-red-500 bg-gray-400">Submit</button>
      </form>
    </div>
  );
};

export default Card;