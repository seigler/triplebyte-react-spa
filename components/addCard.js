import React from 'react';
import { useDispatch } from 'react-redux'

import { withRedux } from '../lib/redux';

const addCard = ({ columnIndex }) => {
  const dispatch = useDispatch();
  return <a onClick={
    () => {
      const userText = window.prompt('New card text:', '(no text)');
      dispatch({ type: 'ADD_CARD', payload: {
        column: columnIndex,
        text: userText
      } });
    }
  }>+ Add a card</a>;
}

export default withRedux(addCard);
