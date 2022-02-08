import react from "react";
import './TodoItem.css';

function TodoItem(props){

    const onComplete = ()=>{
        alert(`Ya completaste el TODO ${props.text}`)
    }

    const onDelete = ()=>{
        alert(`Borraste el TODO ${props.text}`)
    }

    return(
        <li className={`todoItem ${props.completed}`}>
            <input type="checkbox" id="checkTask"
                onClick={onComplete}
            />
            <p>{props.text}</p>
            <img src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1644285594~hmac=1cb8b87ba5c0f3369f537ab7b31204e5"
                onClick={onDelete}
            />
        </li>
    );
}

export { TodoItem };