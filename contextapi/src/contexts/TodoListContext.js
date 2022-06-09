import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Plan the family trip' },
        { id: 2, text: 'Go shopping for dinner' },
        { id: 3, text: 'Go for a walk' }
    ]);

    const addTodo = (text) => {
        const newTodo = { id: todos.length + 1, text };
        setTodos([...todos, newTodo]);
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== Number(id)));
    }

    return (
        <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;