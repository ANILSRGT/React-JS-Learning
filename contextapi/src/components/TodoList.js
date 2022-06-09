import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
    const [todoText, setTodoText] = useState('');
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const { todos, dispatch } = useContext(TodoListContext);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChangeTodo = (e) => {
        setTodoText(e.target.value);
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.value;
        dispatch({ type: 'REMOVE_TODO', id });
    }

    const submitTodoForm = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todoText });
        setTodoText('');
    }

    return (
        <div style={{ background: theme.background, color: theme.text, padding: '20px', textAlign: 'center' }}>
            <div className="ui cards" style={{ overflowWrap: 'break-word', display: 'block' }}>
                {
                    todos.length ? todos.map(todo => (
                        <div key={todo.id} className='card' style={{ width: '100%' }}>
                            <div className='content'>
                                {todo.text}
                            </div>
                            <button className='ui bottom basic red button' onClick={handleRemoveTodo} value={todo.id}><i className="close icon"></i>Remove</button>
                        </div>
                    )) : <div>No todos, yay!</div>
                }
            </div>
            <button className='ui button primary' onClick={changeTheme} style={{ marginTop: '20px' }}>Change theme</button>
            <form onSubmit={submitTodoForm} style={{ marginTop: '10px' }}>
                <label htmlFor="todo" style={{ marginRight: '4px' }}>Add Todo</label>
                <input type="text" id='todo' value={todoText} onChange={handleChangeTodo} style={{ marginRight: '4px' }} />
                <input type="submit" className="ui button primary" value={'add new todo'} />
            </form>
        </div>
    );
}

export default TodoList;