import React, { useState } from 'react'

const ToDoApp = () => {
    const [todos, settodos] = useState([])
    const [input, setinput] = useState("")
    const addtodo = () => {
        if (!input.trim()) return;
        settodos(prev => [...prev, input])
        setinput("")
    }
    const removeTodo = (index) => {
        settodos(prev => prev.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h2>ToDo List</h2>
            <input value={input} onChange={(e) => setinput(e.target.value)} placeholder='Enter ToDo' />
            <button onClick={addtodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export
    default ToDoApp
