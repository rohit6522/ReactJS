const Card = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200">
      <h1 className="bg-gray-900 px-6 py-4 text-center text-2xl font-bold text-white">
        Card Component
      </h1>

      <img
        className="h-64 w-full object-cover"
        src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg"
        alt="Moon robot"
      />

      <div className="p-6">
        <p className="mb-6 text-gray-600 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Doloremque, cumque saepe rerum reiciendis sunt hic officia
          ratione sequi sed esse.
        </p>

        <button
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          onClick={handleClick}
        >
          Click Me
        </button>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Enter anything"
            className="rounded-lg border border-gray-300 bg-amber-100 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="submit"
            className="rounded-lg bg-gray-700 px-5 py-3 text-lg font-bold text-white transition hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;