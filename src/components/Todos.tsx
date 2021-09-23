import {FC} from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todo.module.css';

const  Todos: FC<{items: Todo[], onClick: (id: string) => void}> = (props) => {
    return (
        <ul className={classes.todos}>
            {
                props.items.map(item => <TodoItem key={item.id} onClick={props.onClick} item={item}/>)
            }
        </ul>
    );
}

export default Todos;
