import React from "react";
import "./App.css";
import { useRef } from "react";

const App = () => {
  const nameRef = useRef();
  const ageRef = useRef();

  const nameKey = (e) => {
    if (e.key === "Enter") {
      ageRef.current.focus();
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="input-div">
            <label htmlFor="">Name</label>
            <input type="text" ref={nameRef} onKeyDown={nameKey} />
          </div>
          <div className="input-div">
            <label htmlFor="">Age</label>
            <input type="number" ref={ageRef} />
          </div>
          <div className="input-div">
            <label htmlFor="">Place</label>
            <input type="text" name="" id="" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default App;
