import React, {useState} from 'react';
import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onAddTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos((previous) => {
            return previous.concat(newTodo);
        });
    };

    const onClickItem = (id: string) => {
        setTodos((previous) => {
            return previous.filter(todo => todo.id !== id);
        });
    };

    return (
        <div>
            <NewTodo onAddTodo={onAddTodoHandler}/>
            <Todos onClick={onClickItem} items={todos}/>
        </div>
    );
}

export default App;
