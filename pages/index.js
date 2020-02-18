import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector, shallowEqual } from 'react-redux'
import { withRedux } from '../lib/redux'
import useInterval from '../lib/useInterval'

import Column from '../components/column';
import Card from '../components/card';

const IndexPage = () => {
  const columns = useSelector(state => state.columns, shallowEqual);
  return (
    <main className='App'>
      {columns.map((c, index) => <Column index={index} key={`column${index}`} name={c.name} headerColor={c.headerColor} />)}
      <style jsx>{`
      .App {
        display: flex;
        flex-direction: row;
        padding: 12.5px;
      }
      `}</style>
      <style global jsx>{`
        body {
          background: #ECEEEE;
        }
      `}</style>
    </main>
  )
}

IndexPage.getInitialProps = ({ reduxStore }) => {
  // // Tick the time once, so we'll have a
  // // valid time before first render
  // const { dispatch } = reduxStore
  // dispatch({
  //   type: 'TICK',
  //   light: typeof window === 'object',
  //   lastUpdate: Date.now(),
  // })

  return {}
}

export default withRedux(IndexPage)
