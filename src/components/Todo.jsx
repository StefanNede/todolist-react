import React from 'react';

export default function Todo(props){
    function deleteHandler(){
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
    }
    return (
        <>
            <li>{props.todo.text}</li>
            <button onClick={deleteHandler}>done</button>
        </>
    );
}