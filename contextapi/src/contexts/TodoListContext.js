import React, { createContext, useState, useReducer } from 'react';
import uuid from 'react-uuid';
import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        { id: uuid(), text: 'Plan the family trip' },
        { id: uuid(), text: 'Go shopping for dinner' },
        { id: uuid(), text: 'Go for a walk' }
    ]);

    return (
        <TodoListContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;