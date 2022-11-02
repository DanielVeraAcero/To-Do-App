import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton/CreateToDoButton";

function AppUI() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoContext.Consumer>
        {({ error, loading, searchedToDos, completeToDos, deleteToDos }) => (
          <ToDoList>
            {error && <p>Error</p>}
            {loading && <p>Loading</p>}
            {!loading && !searchedToDos.length && <p>Crea tu primera tarea</p>}

            {searchedToDos.map((todo, index) => (
              <ToDoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeToDos(todo.text)}
                onDelete={() => deleteToDos(todo.text)}
              />
            ))}
          </ToDoList>
        )}
      </ToDoContext.Consumer>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export { AppUI };
