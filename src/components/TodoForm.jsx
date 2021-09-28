import React, { useState, useEffect, useRef } from 'react'

function TodoForm({edit, onSubmit,}) {
    const [input, setInput] = useState(edit ? edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault()

        onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        console.log(input)

        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update your item"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={input}
                        placeholder="Add a todo ..."
                        className="todo-input"
                        name="text"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button">Add todo</button>
                </>
            )}
        </form >
    )
}

export default TodoForm


// https://github.com/mmeii/react-todo-list/blob/master/src/App.css