import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { withRedux } from '../lib/redux';

import Card from './card';
import AddCard from './addCard';

const column = ({ name, index, headerColor }) => {
  const cards = useSelector(state => state.columns[index].cards);

  return <div className='column'>
    <h1 className='card-title' style={{ color: 'white', backgroundColor: headerColor }}>{name}</h1>
    { cards.map((c, cardIndex) => <Card key={`card-${index}-${cardIndex}`} />) }
    <AddCard index={index} />
    <style jsx>{`
      .column {
        margin: 12.5px;
      }
    `}</style>
  </div>
}

export default withRedux(column);
