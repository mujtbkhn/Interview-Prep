import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [buttonState, setButtonState] = useState(true);

  const toggleButton = () => {
    setButtonState((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button buttonState={buttonState} toggleButton={toggleButton} />
      <Card buttonState={buttonState} />
    </div>
  );
}

export default App;
