import React from "react";

const Counter = (props) => {
  const { name, count } = props;
  return (
    <div>
      <h1>
        {name}
        {count}
      </h1>
    </div>
  );
};

export default Counter;
