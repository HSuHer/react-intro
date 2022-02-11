import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const onClickButton=(msg)=>{
        alert(msg)
    }

    return(
        <button 
            className="button buttonAddTask"
            onClick={()=>onClickButton("Aqui se deberia abrir el modal")}
        >
            <p>Add task</p>
        </button>
    );
}

export {CreateTodoButton};