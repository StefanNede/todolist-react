import React, { useState } from 'react';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState([]);
  return (
    <>
      <h1>To Do List</h1>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App;
