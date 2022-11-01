import React from "react";
import "./ToDoSearch.css";

function ToDoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className="ToDoSearch"
      placeholder="Search"
      onChange={onSearchValueChange}
    />
  );
}

export { ToDoSearch };
