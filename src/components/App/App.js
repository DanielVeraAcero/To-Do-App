import React from "react";
import { AppUI } from "./AppUI";

// const defaultToDos = [
//   {
//     text: "cortar cebolla",
//     completed: false,
//   },
//   {
//     text: "estudiar",
//     completed: true,
//   },
//   {
//     text: "react",
//     completed: false,
//   },
// ];

const localStorageToDos = localStorage.getItem('TODOS-V1');
let parsedToDos;
if (!localStorageToDos) {
  localStorage.setItem('TODOS-V1', JSON.stringify([]));
  parsedToDos = [];
} else {
  parsedToDos = JSON.parse(localStorageToDos);
}

function App() {
  const [toDos, setToDos] = React.useState(parsedToDos);
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

  const saveToDos = (newToDos) => {
    const stringifiedToDos = JSON.stringify(newToDos);
    localStorage.setItem('TODOS-V1', stringifiedToDos);
    setToDos(newToDos);
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
    <AppUI  
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDos={completeToDos}
      deleteToDos={deleteToDos}
    />
  );
}

export default App;
