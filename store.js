import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  columns: [
    { name: 'Backlog', headerColor: '#8E6E95', id: 'backlog' },
    { name: 'In Progress', headerColor: '#8E6E95', headerColor: '#39A59C', id: 'in-progress' },
    { name: 'Ready for Review', headerColor: '#344759', id: 'ready-for-review' },
    { name: 'Completed', headerColor: '#E8741E', id: 'completed' },
  ],
  cards: [
  ],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_CARD':
      return {
        ...state,
        cards: state.cards.concat(        {
          id: `${Date.now()}-${Math.random()}`,
          text: payload.text,
          column: payload.column,
        }),
      };
    case 'MOVE_CARD':
      const cardIndex = state.cards.findIndex(c => c.id === payload.id);
      const newCards = state.cards.slice(0);
      newCards.splice(cardIndex, 1, {
        ...state.cards[cardIndex],
        column: payload.column,
      });
      return {
        ...state,
        cards: newCards,
      };
    case 'RESET':
      if (payload) {
        return payload;
      } else {
        return initialState;
      }
    default:
      return state
  }
};

const localStorageMiddleware = ({getState}) => {
  return (next) => (action) => {
      const result = next(action);
      localStorage.setItem('triplebyte-react-spa', JSON.stringify(
        getState()
      ));
      return result;
  };
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(
      localStorageMiddleware
    ))
  )
};
