import uuid from 'react-uuid';

export const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: uuid(), text: action.text }];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}