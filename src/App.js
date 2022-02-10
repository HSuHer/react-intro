import react, { useState } from "react";
import {TodoTitle} from './TodoTitle';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import {CreateTodoButton} from './CreateTodoButton';
import './App.css'

//import './App.css';
const defaultTodos=[
  {text:'Empezar el curso de introductorio a React.JS', completed:true},
  {text:'Terminar el curso', completed:true},
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
          {searchedTodos.map(todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton /> 
      </div>
   </>
  );
}

export default App;