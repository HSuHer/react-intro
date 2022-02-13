import React, { useContext } from 'react';
import {TodoTitle} from '../TodoTitle';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    }=useContext(TodoContext);
    return (
        <>
            <div className="taskContiner">
                <TodoTitle />
                <TodoCounter/>    
                <TodoSearch/>
                <TodoList>
                    {loading && <p>Estamos cargando, no desesperes...</p>}
                    {error && <p>Desesperate, hubo un error</p>}
                    {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                    {searchedTodos.map(todo =>(
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={()=>completeTodo(todo.text)}
                        onDelete={()=>deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
                {!!openModal &&(
                    <Modal />
                )}
                <CreateTodoButton setOpenModal={setOpenModal}/> 
            </div>
        </>
    );
}

export {AppUI};