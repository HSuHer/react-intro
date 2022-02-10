import react, { useState } from "react";
import './TodoSearch.css'

function TodoSearch(){

    const [searchValue,setSearchValue]=useState("");

    const onSearchValueChange = (event) =>{
        console.log()
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
            <p>{searchValue}</p>
        </>
    );
}

export {TodoSearch};