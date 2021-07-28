import React, { useState } from 'react'

const AddNewTodo = ({addTodo}) => {
    const [todos, setTodos] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos);
        setTodos('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="To Do"></label>
                <input type="text" value={todos} id="todo" onChange={(e)=> setTodos(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddNewTodo
