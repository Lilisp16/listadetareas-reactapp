import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (Event) => {
    console.log(Event.target.value);
    setSearchValue(Event.target.value);
    };

    return (
        <input 
        className="TodoSearch" 
        placeholder="search"
        value={searchValue} 
        onChange={onSearchValueChange}
        />  
       
);

}

export { TodoSearch };
