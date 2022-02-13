import React, { useContext } from 'react';
import {TodoTitle} from '../TodoTitle';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI(){

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
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
                    {(!loading && !searchedTodos.length) && <p>¡Crea ty primero TODO!</p>}
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
                <CreateTodoButton /> 
            </div>
        </>
    );
}

export {AppUI};