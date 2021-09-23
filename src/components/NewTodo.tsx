import {FC, FormEvent, useRef} from "react";
import classes from './NewTodo.module.css';

const NewTodo: FC<{onAddTodo: (text: string) => void}> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const addTodoHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        if(enteredText.trim().length === 0) {
            return;
        }
        props.onAddTodo(enteredText);
        textInputRef.current!.value = '';
    };
    return (
        <form onSubmit={addTodoHandler} className={classes.form }>
            <label htmlFor="text">Todo Text</label>
            <input type="text" name="text" ref={textInputRef}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;