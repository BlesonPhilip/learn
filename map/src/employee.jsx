import React from "react";

const Employee = (props) => {
  const { name, age, designation } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{designation}</h3>
    </div>
  );
};

export default Employee;
