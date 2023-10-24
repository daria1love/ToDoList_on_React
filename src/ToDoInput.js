import React from 'react'

export default function ToDoInput({ todo, setToDo, addToDo }) {
    return (
        <div className='input-wrapper'>
            <input
                type='text'
                name='todo'
                placeholder='Create a new todo'
                value={todo}
                onChange={(e) => {
                    setToDo(e.target.value)
                }}
            />
            <button className='add-button' onClick={addToDo}>
                Add
            </button>
        </div>
    );
};
