import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS-V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedToDos = toDos.filter((toDo) => toDo.completed == true).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];
  if (searchValue == 0) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const completeToDos = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text == text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  };

  const deleteToDos = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text == text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };
  return (
    <ToDoContext.Provider
      value={{
        error,
        loading,
        totalToDos,
        completedToDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        completeToDos,
        deleteToDos,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
