import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import './ToDoCounter.css'

function ToDoCounter () {
    const {totalToDos, completedToDos} = React.useContext(ToDoContext)
    return (
        <h2 className="ToDoCounter">Has completado {completedToDos} de {totalToDos} to do's</h2>
    )
}

export {ToDoCounter}