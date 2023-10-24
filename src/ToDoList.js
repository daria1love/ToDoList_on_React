import React, { useState } from 'react';
import "./ToDoList.css";
import ToDoInput from './ToDoInput';
import ToDoLists from './ToDoLists';

export default function ToDoList() {
    const [todos, setToDos] = useState([]);
    const [todo, setToDo] = useState("");

    const addToDo = () => {
        if (todo !== "") {
            setToDos([...todos, todo]);
            setToDo("");
        }
    };

    const deleteToDo = (text) => {
        const newToDOs = todos.filter((todo) => {
            return todo !== text;
        });
        setToDos(newToDOs);
    };



    return (
        <div className='ToDoList'>
            <h1>
                React TODO App
            </h1>

            <ToDoInput todo={todo} setToDo={setToDo} addToDo={addToDo} />
            <ToDoLists list={todos} remove={deleteToDo} />
        </div>
    )
}
