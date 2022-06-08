const initialState = {
    cards: [
        { id: '1', title: 'Alex', text: 'This is card 1' },
        { id: '2', title: 'Willma', text: 'This is card 2' },
        { id: '3', title: 'John', text: 'This is card 3' },
    ],
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_CARD":
            let newCards = state.cards.filter(card => card.id !== action.id);
            return {
                ...state,
                cards: newCards
            }
        case "FETCH_USER":
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;