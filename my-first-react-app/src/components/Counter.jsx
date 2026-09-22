
import { useEffect, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(1)
  const [theme, setTheme] = useState(true)

  const handleInc = () => {
    setCount(count + 1)
  }

  const handleDec = () => {
    setCount(count - 1)
  }

  const handleZero = () => {
    setCount(0)
  }

  const handleTheme = () => {
    setTheme(!theme)
  }
  
  useEffect(() => {
    console.log("Counter Started")

    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={theme ? "bg-white min-h-screen" : "bg-gray-900 min-h-screen"}>
      <button
        onClick={handleTheme}
        className="bg-blue-500 text-white px-3 py-1 m-2 rounded"
      >
        Toggle Theme
      </button>

      <h1 className="text-2xl font-bold text-center">
        Counter
      </h1>

      <h2 className="bg-amber-300 text-white px-3 rounded-2xl m-2 py-1 text-center">
        Counter Status :- {count}
      </h2>

      <button
        onClick={handleInc}
        className="bg-green-500 text-white px-3 py-1 m-2 rounded"
      >
        Click Me
      </button>

      <button
        onClick={handleDec}
        className="bg-red-500 text-white px-3 py-1 m-2 rounded"
      >
        Don't Touch
      </button>

      <button
        onClick={handleZero}
        className="bg-gray-600 text-white px-3 py-1 m-2 rounded"
      >
        Reset Me
      </button>
    </div>
  )
}

export default Counter
