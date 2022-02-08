import react from "react";
import './TodoSearch.css'

function TodoSearch(){
    return(
        <div className="searchContainer">
            <input className="input inputTask" placeholder="Search task" />
        </div>
    );
}

export {TodoSearch};