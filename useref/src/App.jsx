import React from "react";
import "./App.css";
import { useRef } from "react";

const App = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const placeRef = useRef();
  const butRef = useRef();

  const nameKey = (e) => {
    if (e.key === "Enter") {
      ageRef.current.focus();
    }
  };

  const ageKey = (e) => {
    if (e.key === "Enter") {
      placeRef.current.focus();
    }
  };

  const placeKey = (e) => {
    if (e.key === "Enter") {
      butRef.current.focus();
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
            <input type="number" ref={ageRef} onKeyDown={ageKey} />
          </div>
          <div className="input-div">
            <label htmlFor="">Place</label>
            <input type="text" ref={placeRef} onKeyDown={placeKey} />
          </div>
          <button ref={butRef}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default App;
