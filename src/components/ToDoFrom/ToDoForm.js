import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function ToDoForm() {
  const [newToDoValue, setNewToDoValue] = React.useState("");

  const { addToDos, setOpenModal } = React.useContext(ToDoContext);

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addToDos(newToDoValue);
    setOpenModal(false);    
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
