import { useState } from "react"
import DisplayCount from "./DisplayCount"


function App() {
    const [count, setCount] = useState(0)
  return (
    <>
      <DisplayCount count={count} setCount={setCount}/>
    </>
  )
}

export default App
