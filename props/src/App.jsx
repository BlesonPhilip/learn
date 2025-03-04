import React from "react";
import Card from "./components/card";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <Card title=" Title 1" content="hai how are you" />
      <Card title="Title 2" content="hey i am fine" />
      <Card title="Title 3" content="hey , what about you" />
    </div>
  );
};

export default App;
