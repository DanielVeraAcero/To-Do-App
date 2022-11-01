import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}) {  
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
