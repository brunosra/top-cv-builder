import "./EditButton.css";

function EditButton({ handleClick }) {
  return (
    <span className="edit-btn" onClick={handleClick}>
      <span className="material-symbols-outlined">edit</span>
    </span>
  );
}

export default EditButton;
