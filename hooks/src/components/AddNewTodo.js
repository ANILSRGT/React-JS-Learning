import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
    const [todoText, setTodoText] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault(); // Page refresh will not happen
        addTodo(todoText);
        setTodoText('');
    };

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="todo"></label>
            <input type="text" id="todo" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddNewTodo;