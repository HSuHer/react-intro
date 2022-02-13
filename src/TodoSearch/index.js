import react, { useContext, useState } from "react";
import './TodoSearch.css'
import PropTypes from 'prop-types';
import { TodoContext } from "../TodoContext";

function TodoSearch(){

    const {searchValue,setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return(
        <>
            <div className="searchContainer">
                <input 
                    className="input inputTask" 
                    placeholder="Search task" 
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>
        </>
    );
}

export {TodoSearch};
