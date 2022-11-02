import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch() {  
  const {searchValue, setSearchValue} = React.useContext(ToDoContext)
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    // console.log(searchValue);
  };
  return (
    <input
      className="ToDoSearch"
      placeholder="Search"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { ToDoSearch };
