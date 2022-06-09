import React, { useState, useEffect } from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Pay bills' },
        { id: 2, text: 'Do your homework' },
        { id: 3, text: 'Feed the dog' },
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { id: todos.length + 1, text }
        ]);
    };

    useEffect(() => {
        console.log('Use Effect Todos:', todos);
    }, [todos]);

    useEffect(() => {
        console.log('Use Effect Count:', count);
    }, [count]);

    useEffect(() => {
        console.log('This hook runs at initial render');
    }, []);

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            <AddNewTodo addTodo={addTodo} />
            <button onClick={() => setCount(count + 1)}>Score: {count}</button>
        </div>
    );
}

export default TodoList;