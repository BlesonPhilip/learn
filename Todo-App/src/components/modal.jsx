import "./modal.css";

const Modal = ({
  show,
  setShow,
  onTitleChange,
  onDescriptionChange,
  onTimeChange,
  onPriorityChange,
  onAdd,
  data,
}) => {
  const onInputChange = (e) => {
    onTitleChange(e.target.value);
  };
  const onDesChange = (e) => {
    onDescriptionChange(e.target.value);
  };
  const onTimChange = (e) => {
    onTimeChange(e.target.value);
  };
  const onPriChange = (e) => {
    onPriorityChange(e.target.value);
  };

  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className="modal-background" onClick={() => setShow(false)}></div>
      <div className="modal-container">
        <div className="model">
          <label>Title</label>
          <input
            className="title"
            type="text"
            onChange={onInputChange}
            value={data.title}
          />
          <label>Description</label>
          <textarea
            className="description"
            onChange={onDesChange}
            value={data.description}
          ></textarea>

          <input
            type="time"
            className="time"
            onChange={onTimChange}
            value={data.time}
          />
          <select
            name=""
            id=""
            className="priority"
            onChange={onPriChange}
            value={data.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="btn" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
