import React from "react";
import { useState } from "react";
import Counter from "./counter";

const App = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  let obj = { name: "2nd counter : ", count: count };
  return (
    <div>
      <button onClick={add}>Add by 1</button>
      <Counter name="1st counter : " count={count} />
      <Counter {...obj} />
      {/* spread operator */}
    </div>
  );
};

export default App;
