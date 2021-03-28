import React from 'react';
import Todo from "./Todo";

export default function ToDoList(props){
    return (
        <>
            <ul className="todolist">
                {props.todos.map(todo => (
                    <Todo setTodos={props.setTodos} todos = {props.todos} todo={todo} key={todo.id} />
                ))}
            </ul>
        </>
    )
}