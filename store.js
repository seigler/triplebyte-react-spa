import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  columns: [
    { name: 'Backlog', headerColor: '#8E6E95', cards: [{}, {}] },
    { name: 'In Progress', headerColor: '#8E6E95', headerColor: '#39A59C', cards: [{}, {}] },
    { name: 'Ready for Review', headerColor: '#344759', cards: [{}, {}] },
    { name: 'Completed', headerColor: '#E8741E', cards: [{}, {}] },
  ]
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_CARD':
      newCards = [...state.columns[action.payload.column].cards, { text: payload.text }];
      return {
        ...state,
      };
    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}
