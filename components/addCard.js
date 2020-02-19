import React from 'react';
import { useDispatch } from 'react-redux'

import { withRedux } from 'lib/redux';

const addCard = ({ column }) => {
  const dispatch = useDispatch();
  return <>
    <a className='addCard' onClick={
      () => {
        const userText = window.prompt('New card text:', '');
        if (userText !== null) {
          dispatch({ type: 'ADD_CARD', payload: {
            column,
            text: userText
          }});
        }
      }
    }><span>+</span> Add a card</a>
    <style jsx>{`
      .addCard {
        margin-top: 12px;
        cursor: pointer;
        opacity: 0.4;
        display: block;
        padding: 0 8px;
      }
      .addCard:hover {
        opacity: 1;
      }
      span {
        font-size: 1.5em;
      }
    `}</style>
  </>;
}

export default withRedux(addCard);
