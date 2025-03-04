import React from "react";

const Blog = ({ titless, conts }) => {
  return (
    <div>
      <h1>{titless}</h1>

      <p>{conts}</p>
    </div>
  );
};

export default Blog;
