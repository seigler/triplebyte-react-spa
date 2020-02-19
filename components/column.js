import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { withRedux } from 'lib/redux';

import Card from 'components/card';
import AddCard from 'components/addCard';

const column = ({ name, id, headerColor }) => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.filter(
    c => (c.column === id)
  ), shallowEqual);
  const colIds = useSelector(state => state.columns.map(c => c.id));
  const myIndex = colIds.findIndex(x => x === id);
  const neighbors = [null, ...colIds, null];
  const prevColId = neighbors[myIndex+1-1];
  const nextColId = neighbors[myIndex+1+1];

  const moverFactory = (id, column) => {
    if (column) {
      return () => {
        dispatch({
          type: 'MOVE_CARD',
          payload: {
            id,
            column
          }
        });
      }
    } else {
      return null;
    }
  }

  return <section className='column'>
    <h2
      className='card-title'
      style={{ color: '#FFFD', backgroundColor: headerColor }}
    >{name}</h2>
    { cards.map(({ text, id }) => <Card
      key={id}
      text={text}
      moveLeft={moverFactory(id, prevColId)}
      moveRight={moverFactory(id, nextColId)}
    />) }
    <AddCard column={id} />
    <style jsx>{`
      .column {
        flex-basis: 0;
        flex-grow: 1;
        margin: 12.5px;
      }
      h2 {
        padding: 8px;
        line-height: 14px;
        margin-bottom: 6px;
        font-size: inherit;
        text-align: center;
      }
    `}</style>
  </section>
}

export default withRedux(column);
