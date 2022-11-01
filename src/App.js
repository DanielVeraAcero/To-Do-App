import React from "react";
import { ToDoCounter } from "./components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch/ToDoSearch";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { CreateToDoButton } from "./components/CreateToDoButton/CreateToDoButton";
// import './App.css';

const defaultToDos = [
  {
    text: "cortar cebolla",
    completed: false,
  },
  {
    text: "estudiar",
    completed: true,
  },
  {
    text: "react",
    completed: false,
  },
];

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedToDos = toDos.filter(toDo => toDo.completed == true).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];
  if (searchValue == 0) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    })
  }

  return (  
    <React.Fragment>
      <ToDoCounter 
        total = {totalToDos}
        completed = {completedToDos}
      />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {searchedToDos.map((todo, index) => (
          <ToDoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
