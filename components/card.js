import React from 'react';
import CardMover from 'components/cardMover';

export default ({ text = 'No text', moveLeft, moveRight }) => {
  return <>
    <div className='card'>
      { moveLeft && <CardMover direction='left' action={moveLeft} /> }
      <div className='text'>
        { text }
      </div>
      { moveRight && <CardMover direction='right' action={moveRight} /> }
    </div>
    <style jsx>{`
      .card {
        display: flex;
        flex-direction: row;
        margin-bottom: 6px;
        background-color: white;
      }
      .text {
        flex-grow: 1;
        padding: 14px 12px;
      }
    `}</style>
  </>;
}
