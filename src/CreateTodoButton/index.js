import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){

    const onClickButton=(msg)=>{
        setOpenModal(true);
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