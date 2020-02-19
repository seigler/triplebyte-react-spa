import React from 'react';

export default ({ direction, action }) => {
  return <>
    <a className='cardMover' onClick={action}>
      { direction === 'left' ? '〈' : '〉' }
    </a>
    <style jsx>{`
      .cardMover {
        display: flex;
        cursor: pointer;
        padding-${direction}: 8px;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        font-size: 1.5em;
      }
    `}</style>
  </>;
}
