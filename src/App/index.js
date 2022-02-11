import react, { useState } from "react";
import './App.css'
import { AppUI } from "./AppUI";

const defaultTodos=[
  {text:'Empezar el curso de introductorio a React.JS', completed:true},
  {text:'Terminar el curso', completed:false},
  {text:'Integrarlo con Laravel', completed:false}
];

function App() {

  //Estados de iniciales
  const [todos,setTodos] = useState(defaultTodos);
  const [searchValue,setSearchValue] = useState("");

  //Proceso que cuenta todos los TODOs y los completados
  const totalTodos=todos.length;
  const completedTodos = todos.filter((todo)=>!!todo.completed).length;


  //Proceso que busca los TODOs y los añade en el array de buscados si el input
  //de busqueda cambio caso contrario añade el array completo
  let searchedTodos = [];
  if(!searchValue.length>0){
    searchedTodos=todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Funcion que completa la TODO seleccionada
  const completeTodo = (text) => {
    const todoIndex= todos.findIndex(todo => todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  };

  //Funcion que elimina la TODO seleccionada
  const deleteTodo = (text) => {
    const todoIndex= todos.findIndex(todo => todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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