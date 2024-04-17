//const NewComponent = WithCounter(OldComponent)

import { useState } from "react";

const WithCounter = (OldComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        incrementCount={() => setCount((count) => count + 1)}
      />
    );
  };
};
export default WithCounter;
