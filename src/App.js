import React from "react";
import { ToDoCounter } from "./components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch/ToDoSearch";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { CreateToDoButton } from "./components/CreateToDoButton/CreateToDoButton";
// import './App.css';

const todos = [
  {
    text: 'cortar cebolla',
    completed: false
  },
  {
    text: 'estudiar',
    completed: false
  },
  {
    text: 'react',
    completed: false
  },
]

function App() {
  return (
    <React.Fragment>
      {<ToDoCounter />}      
      {<ToDoSearch />}      
      {<ToDoList>
        {todos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text} />
        ))}
      </ToDoList>}
      {<CreateToDoButton />}      
    </React.Fragment>
  );
}

export default App;
