import react from "react";
import './TodoSearch.css'

function TodoSearch(){

    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
    }

    return(
        <div className="searchContainer">
            <input 
                className="input inputTask" 
                placeholder="Search task" 
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export {TodoSearch};