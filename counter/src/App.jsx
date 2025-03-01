import React from "react";
import { useState } from "react";
import Counter from "./counter";

const App = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={add}>Add</button>
      <Counter name="1st counter : " count={count} />
      <Counter name="2nd counter : " count={count} />
    </div>
  );
};

export default App;
