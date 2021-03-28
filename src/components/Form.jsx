import React from 'react';

export default function Form(props){
    function inputTextHandler(e){
        props.setInputText(e.target.value);
    };
    function submitTodoHandler(e){
        // stops the page from refreshing 
        e.preventDefault();
        // for each todo that we add, we need the text, if it is completed, and a unique id for rendering the list
        props.setTodos([...props.todos,{text: props.inputText, completed: false, id: Math.random()*1000}]);
        // reset the state
        props.setInputText("");
    }
    return (
        <>
            <input value={props.inputText} onChange={inputTextHandler} type="text" placeholder="enter todo" />
            <button onClick={submitTodoHandler} type="submit">submit</button>
        </>
    )
}