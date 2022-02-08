import react from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="todoItem">
            <input type="checkbox" id="completed" />
            <p>{props.text}</p>
            <img src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1644285594~hmac=1cb8b87ba5c0f3369f537ab7b31204e5"/>
        </li>
    );
}

export { TodoItem };