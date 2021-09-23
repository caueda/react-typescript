import {FC, MouseEvent} from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css';

const TodoItem: FC<{ item: Todo, onClick: (id: string) => void }>= (props) => {
    const onClickHandler = (event: MouseEvent) => {
        props.onClick(props.item.id);
    }
    return (
        <li className={classes.item} key={props.item.id}
            onClick={onClickHandler}>
            {props.item.text}
        </li>
    );
}
export default TodoItem;