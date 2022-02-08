import react from "react";
import {TodoTitle} from './TodoTitle';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import {CreateTodoButton} from './CreateTodoButton';
import './App.css'

//import './App.css';
const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de introductorio a React.JS', completed:false},
  {text:'Llorar con la llorona', completed:false}
];
function App() {
  return (
   <>
      <div className="taskContiner">
        <TodoTitle />
        <TodoCounter />    
        <TodoSearch />
        <TodoList>
          {todos.map(todo =>(
            <TodoItem key={todo.text} text={todo.text} />
          ))}
        </TodoList>
        <CreateTodoButton /> 
      </div>
   </>
  );
}

export default App;