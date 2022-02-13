import react, { useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import './App.css'
import { AppUI } from "./AppUI";

/* const defaultTodos=[
  {text:'Empezar el curso de introductorio a React.JS', completed:true},
  {text:'Terminar el curso', completed:false},
  {text:'Integrarlo con Laravel', completed:false}
]; */

function App() {


  //Invocamos nuestro Custom Hook
  const [item,saveItem] = useLocalStorage('TODOS_V1',[]);
  
  const [searchValue,setSearchValue] = useState("");

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
   <>
      <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
   </>
  );
}

export default App;