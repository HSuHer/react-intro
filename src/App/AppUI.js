import React from 'react';
import {TodoTitle} from '../TodoTitle';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {CreateTodoButton} from '../CreateTodoButton';

function AppUI({
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }){
    return (
        <>
            <div className="taskContiner">
                <TodoTitle />
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />    
                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
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