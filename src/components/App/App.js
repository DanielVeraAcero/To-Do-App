import React from "react";
import { ToDoProvider } from "../ToDoContext/ToDoContext";
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

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
