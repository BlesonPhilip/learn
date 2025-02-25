import React, { useState } from "react";
import "./App.css";
import Modal from "./components/modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState([]);
  const [singleTodo, setSingleTodo] = useState({
    titile: "",
    description: "",
    time: "",
    priority: "",
  });
const onTitlechange=titile=>{
setSingleTodo(...singleTodo,titile:titile)
}

  return (
    <div className=" todo-container">
      <div className="banner">
        <img src="/car.jpg" alt="car" />
        <div className="bar-container">
          <div className="bar" onClick={() => setShowModal(true)}>
            <p>Create Your Todo...</p>
          </div>
        </div>
      </div>
      <div className="todo-list">
        {todo.map((item, index) => (
          <div className="todo-list-item" key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="time-priority">
              <p>{item.time}</p>
              <p>{item.priority}</p>
            </div>
            <div className="b">
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} setShow={setShowModal} onTitleChange={onTitleChange} />
    </div>
  );
};

export default App;
