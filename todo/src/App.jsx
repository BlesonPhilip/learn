import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addList = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      time: new Date().toLocaleString(),
    };
    setTask([...task, newTask]);
    setTaskInput("");
  };
  const deleteTask = (id) => {
    setTask(task.filter((tasks) => tasks.id !== id));
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };
  return (
    <>
      <div className="box">
        <h2>Todo App</h2>
        <div className="in">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Enter the task.."
          />
          <button onClick={addList}>Add</button>
        </div>
        <div className="task1">
          {task.length === 0 ? (
            <p>No task added yet...</p>
          ) : (
            task.map((tasks) => (
              <div key={tasks.id} className="task-items">
                <p>{tasks.text}</p>
                <p className="time">Added:{tasks.time}</p>
                <button onClick={() => deleteTask(tasks.id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
