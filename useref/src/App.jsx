import React from "react";
import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState({ name: "" });
  const [submittedDataList, setSubmittedDataList] = useState([]);

  const handleInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    if (value.name) {
      setSubmittedDataList([...submittedDataList, value]); // Append new submission
      setValue({ name: "" }); // Clear form after submission
    } else {
      alert("Please fill out all fields before submitting!");
    }
  };

  const nameRef = useRef();
  const btnRef = useRef();

  const nameKeyDown = (e) => {
    if (e.key === "Enter") {
      btnRef.current.focus();
    }
  };
  return (
    <div className="container">
      <div className="form">
        <div className="input-div">
          <label>Name</label>
          <input
            ref={nameRef}
            onKeyDown={nameKeyDown}
            onChange={handleInput}
            value={value.name}
            type="text"
            name="name"
          />
        </div>

        <button ref={btnRef} onClick={onClick}>
          Submit
        </button>
      </div>
      {submittedDataList.length > 0 && (
        <div className="display">
          <h3>Submitted Data:</h3>
          {submittedDataList.map((data, index) => (
            <div key={index} className="submitted-item">
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
