import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, changeValue } from '../actions/counterActions'

const Counter = ({ count, by, increment, decrement, changeValue }) => {
  return (
    <div style={{textAlign: 'center', paddingTop: '128px'}}>
      <h1>{ count }</h1>
      <input type="number" value={by} onChange={(e) => changeValue(+e.target.value)} />
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
  by: state.by
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  changeValue: (num) => dispatch(changeValue(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
