import React from "react";
import "./App.css";
import { useRef } from "react";

const App = () => {
  const nameRef = useRef();
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="input-div">
            <label htmlFor="">Name</label>
            <input type="text" nameRef={useRef} name="" id="" />
          </div>
          <div className="input-div">
            <label htmlFor="">Age</label>
            <input type="number" name="" id="" />
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
