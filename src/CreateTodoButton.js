import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    return(
        <button className="button buttonAddTask">
            <p>Add task</p>
        </button>
    );
}

export {CreateTodoButton};