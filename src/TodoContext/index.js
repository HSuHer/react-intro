import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';

const TodoContext = createContext();


function TodoProvider(props){

    const {
        item: item,
        saveItem: saveItem,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
      
      const [searchValue,setSearchValue] = useState("");
    
      const [openModal,setOpenModal] = useState(false);

      //Proceso que cuenta todos los TODOs y los completados
      const totalTodos=item.length;
      const completedTodos = item.filter((todo)=>!!todo.completed).length;
    
    
      //Proceso que busca los TODOs y los añade en el array de buscados si el input
      //de busqueda cambio caso contrario añade el array completo
      let searchedTodos = [];
      if(!searchValue.length>0){
        searchedTodos=item;
      }else{
        searchedTodos = item.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }

      //Funcion que añade un Todo
      const addTodo = (text) => {
        const newTodos=[...item];
        newTodos.push({
          completed: false,
          text: text,
        })
        saveItem(newTodos);
      };
    
      
      //Funcion que completa la TODO seleccionada
      const completeTodo = (text) => {
        const todoIndex= item.findIndex(todo => todo.text===text);
        const newTodos=[...item];
        newTodos[todoIndex].completed=true;
        saveItem(newTodos);
      };
    
      //Funcion que elimina la TODO seleccionada
      const deleteTodo = (text) => {
        const todoIndex= item.findIndex(todo => todo.text===text);
        const newTodos=[...item];
        newTodos.splice(todoIndex,1);
        saveItem(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};