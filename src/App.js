import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
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
      {/* <CreateToDoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
