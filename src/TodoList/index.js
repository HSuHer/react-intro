import react from "react";
import './TodoList.css'

function TodoList(props){
    return(
        <section className="listContainer">
            <ul className="listTaskDetail">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};