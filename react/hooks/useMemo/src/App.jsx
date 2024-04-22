import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useMemo } from "react";

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [counter, setCounter] = useState(0);
  // const [finalValue, setFinalValue] = useState(0); //usememo lets you avoid adding an extra state variable

  let count = useMemo(() => {
    console.log("usememo called")
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count = count + i;
    }
    return count
  }, [inputValue]);

  // useEffect(() => {
  //   console.log("usememo called")
  //   let count = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     count = count + i;
  //   }
  //   setFinalValue(count)
  // }, [inputValue]);

  return (
    <>
      <input
        placeholder="enter 1 to n"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      {/* Sum from 1 to {inputValue} is {finalValue} */}
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter({counter})
      </button>
    </>
  );
}

export default App;
