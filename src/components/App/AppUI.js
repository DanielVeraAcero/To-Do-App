import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton/CreateToDoButton";
import { Modal } from "../Modal/Modal";
import { ToDoForm } from "../ToDoFrom/ToDoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDos,
    deleteToDos,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <p>Error</p>}
        {loading && <p>Loading</p>}
        {!loading && !searchedToDos.length && <p>Crea tu primera tarea</p>}

        {searchedToDos.map((toDo, index) => (
          <ToDoItem
            key={index}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDos(toDo.text)}
            onDelete={() => deleteToDos(toDo.text)}
          />
        ))}
      </ToDoList>

      {openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}

      <CreateToDoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
