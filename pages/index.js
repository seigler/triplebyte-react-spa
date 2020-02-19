import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { withRedux } from 'lib/redux';

import Column from 'components/column';

const rehydrateStore = () => {
  if (localStorage.getItem('triplebyte-react-spa') === null) {
    return null;
  } else {
    return JSON.parse(localStorage.getItem('triplebyte-react-spa'));
  }
};

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const columns = useSelector(state => state.columns, shallowEqual);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: rehydrateStore() });
    setLoaded(true);
  }, []);
  if (!loaded) return null;
  return (
    <main className='App'>
      {columns.map((c, index, array) => (
        <Column
          id={c.id}
          key={`column-${c.id}`}
          name={c.name}
          headerColor={c.headerColor}
        />
      ))}
      <style jsx>{`
        .App {
          display: flex;
          flex-direction: row;
          padding: 12.5px;
        }
      `}</style>
      <style global jsx>{`
        *, ::before, ::after {
          box-sizing: inherit;
        }
        body {
          box-sizing: border-box;
          background: #ECEEEE;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          color: #000C;
        }
      `}</style>
    </main>
  )
}

export default withRedux(IndexPage);
