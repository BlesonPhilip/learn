import React from "react";
import Card from "./components/card";
import { useState } from "react";
import Blog from "./components/blog";

const App = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };

  const blogs = [
    {
      titles: "My blog 1",
      cont: "this is my first blog",
    },
    {
      titles: "My blog 2",
      cont: "this is my second blog",
    },
    {
      titles: "My blog 3",
      cont: "this is my third blog",
    },
  ];
  return (
    <div>
      <h1>Blogs</h1>
      <hr />
      {blogs.map((blog) => (
        <Blog titless={blog.titles} conts={blog.cont} />
      ))}

      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <Card title=" Title 1" content="hai how are you" />
      <Card title="Title 2" content="hey i am fine" />
      <Card title="Title 3" content="hey , what about you" />
    </div>
  );
};

export default App;
