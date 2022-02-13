import {TodoProvider } from "../TodoContext";
import './App.css'
import { AppUI } from "./AppUI";

function App() {
  //Invocamos nuestro Custom Hook
  
  return (
   <>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
   </>
  );
}

export default App;