import "./modal.css";

const Modal = ({ show, setShow, onTitleChange }) => {
  const onInputChange = (e) => {
    onTitleChange(e.target.value);
  };

  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className="modal-background" onClick={() => setShow(false)}></div>
      <div className="modal-container">
        <div className="model">
          <label>Title</label>
          <input className="title" type="text" onChange={onInputChange} />
          <label>Description</label>
          <textarea className="description"></textarea>

          <input type="time" className="time" />
          <select name="" id="" className="priority">
            <option value="">Low</option>
            <option value="">Medium</option>
            <option value="">High</option>
          </select>
          <button className="btn">Add</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
