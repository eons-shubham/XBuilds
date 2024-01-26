import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const handleDec = () => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

export default App;
