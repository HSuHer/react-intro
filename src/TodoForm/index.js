import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import 'animate.css';


function TodoForm(){

    const [newTodoValue,setNewTodoValue] = useState("");

    const{
        addTodo,
        setOpenModal,
    }=useContext(TodoContext);

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    const onCancel= ()=>{
        setOpenModal(false);
    }

    const onSubmit= (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <>
            <div className='formContainer animate__animated animate__fadeIn'>
                <form onSubmit={onSubmit}>
                    <label>Escribe tu nuevo TODO</label>
                    <textarea 
                        value={newTodoValue}
                        placeholder='Escribe tu accion'
                        onChange={onChange}
                    />

                    <div className='modalButtons'>
                        <button
                            className='modalButton cancelButton'
                            type='button'
                            onClick={onCancel}
                        >
                            Cancelar
                        </button>
                        <button
                            className='modalButton addButton'
                            type='submit'
                        >
                            Añadir
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export {TodoForm};