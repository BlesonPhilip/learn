import React from "react";

const Button = ({ label, onAlert }) => {
  return (
    <div>
      <button onClick={onAlert}>{label}</button>
    </div>
  );
};

export default Button;
