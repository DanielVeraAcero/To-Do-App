import React from "react";
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";
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
