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

function useLocalStorage(itemName, initialValue) {  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return[item, saveItem]
}


function App() {
  const [toDos, saveToDos] = useLocalStorage('TODOS-V1', []);

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
