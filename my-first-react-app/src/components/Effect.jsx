import { useEffect } from "react";

const Effect = () => {
  useEffect(() => {
    console.log("Render")
  }, [])
  return (
    <div>
      Effect
    </div>
  )
}
export default Effect;