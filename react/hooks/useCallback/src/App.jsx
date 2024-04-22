import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // function a() {
  //   console.log("hi there ");
  // }
  var a = useCallback(function () {
    console.log("hello ");
  });
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter({counter})
      </button>
      <Demo a={a} />
    </>
  );
}

const Demo = memo(function ({ a }) {
  console.log("re-render");
  return <>hi there{a}</>;
});

export default App;
