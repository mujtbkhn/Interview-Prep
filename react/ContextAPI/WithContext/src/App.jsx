import { useState } from "react";
import { Provider } from "./CountContext";
import DisplayCount from "./DisplayCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider value={{ count, setCount }}>
      <DisplayCount />
    </Provider>
  );
}

export default App;
